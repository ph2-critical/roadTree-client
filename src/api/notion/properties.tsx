// 실제 유저들의 데이터를 받아오는 API를 정의하는 파일입니다.


export interface Properties {
    // Properties 타입의 속성들을 여기에 정의
    "참고링크": ReferenceLink;
    "Created time": CreatedTime;
    "데일리 작성 내용": RichText;
    "현재상태": Select;
    "닉네임": RichText;
    "기록 분야": Select;
    "Created by": CreatedBy;
    "주제": Title;
}

export interface ReferenceLink {
    id: string;
    type: string;
    url: string;
}

export interface CreatedTime {
    id: string;
    type: string;
    created_time: string;
}

export interface RichTextContent {
    type: string;
    text: {
        content: string;
        link: null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string;
    href: null;
}

export interface RichText {
    id: string;
    type: string;
    rich_text: RichTextContent[];
}

export interface SelectOption {
    id: string;
    name: string;
    color: string;
}

export interface Select {
    id: string;
    type: string;
    select: SelectOption;
}

export interface CreatedByUser {
    object: string;
    id: string;
    name: string;
    avatar_url: string;
    type: string;
    bot: {};
}

export interface CreatedBy {
    id: string;
    type: string;
    created_by: CreatedByUser;
}

export interface Title {
    id: string;
    type: string;
    title: any[]; // 여기에 타이틀에 대한 구조를 정의해야 할 것입니다.
}