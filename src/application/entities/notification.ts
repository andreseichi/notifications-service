import { Replace } from 'src/helpers/replace';
import { Content } from './notification-content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  cancelledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }

  // id
  public get id(): string {
    return this._id;
  }

  // recipientId
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  // content
  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  // category
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  // readAt
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  // cancelledAt
  public cancel() {
    this.props.cancelledAt = new Date();
  }

  public get cancelledAt(): Date | null | undefined {
    return this.props.cancelledAt;
  }

  // createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
