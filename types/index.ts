export interface Channel {
  id: string;
  name: string;
  subject: string;
  students: number;
}

export interface Thread {
  id: string;
  title: string;
  tags: string[];
  author: string;
  createdAt: string;
  preview: string;
  solved: boolean;
  reactions: number;
  pinned?: boolean;
}

export interface ThreadDetail extends Thread {
  body: string;
  attachments: Attachment[];
  steps: Step[];
  final: string;
}

export interface Attachment {
  type: 'image' | 'pdf';
  name: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface ThreadsData {
  pinned: Thread[];
  recent: Thread[];
}
