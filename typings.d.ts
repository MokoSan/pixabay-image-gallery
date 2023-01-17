import { FormEventHandler } from 'react'

interface FormElements extends HTMLFormControlsCollection {
    yourInputName: HTMLInputElement
}

interface EventFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

interface SearchTextCallback {
    (text: string): void;
}

interface IImage {
    webformatURL : string
    user : string
    views : number
    downloads : number
    likes : number
    tags : string
}