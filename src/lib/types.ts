export interface GameMsg
{
    id: string;
    role: 'User' |  'Guest';
    content: string;
    image?: string;
    imageLoading?: string;

}


export interface ImageIA
{
    base64IMG:string;
    mediaType:string;
    uint8ArrayData?: Uint8Array;

}

export interface ConversationMessage
{
    role: 'User' | 'Guest';
    content: String;
}

export interface GenerateStoryResquest{

    userMessage: String;
    conversationHistory: ConversationMessage[];
    isStart: Boolean;
}

export interface GenerateStoryResponse{

    story: String;
    image: ImageIA;
}