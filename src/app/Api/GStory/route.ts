import {google} from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse, type NextRequest } from 'next/server';
import { Game_Prompt } from '@chatia/lib/prompts';
import { GAME_Config } from '@chatia/lib/consts';
import { GenerateStoryResponse } from '@chatia/lib/types';
import { error } from 'console';
import { GenerateStoryResquest } from '@chatia/lib/types';


export async function POST (request: NextRequest){

    try {

        const {userMessage, conversationHistory, isStart}: GenerateStoryResquest = await request.json();
        

        // al iniciar el chat IA (juegardo)
        let prompt: string = Game_Prompt.INITIAL_PROMPT_H;
        
        if(!isStart)
        {
            const historyText = conversationHistory.map(
                (message) => '${message.role}: ${message.content}'
            ).join('\n');


            prompt = Game_Prompt.REANUDE_PROMPT_H(historyText, userMessage);
        }

        const { text } = await generateText({
            model: google('gemini-2.5-flash'),
            prompt
        })

        return NextResponse.json({story: text});
        


    }catch(err) {
        console.error('Error al generar la Historia', err);
        return NextResponse.json({
            err: 'Error al generar la historia'
        }, {status: 500});
    }
}