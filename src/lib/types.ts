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