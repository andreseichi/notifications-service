export class Content {
  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }

  private readonly content: string;
  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 255;
  }

  get value(): string {
    return this.content;
  }
}
