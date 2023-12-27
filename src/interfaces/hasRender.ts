import { HasHtmlFormat } from "./HasHtmlFormat";

export interface HasRender {
    render(docObject: HasHtmlFormat, docType: string): void;
}