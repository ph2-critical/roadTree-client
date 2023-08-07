// notion api의 response를 타입으로 정의한 것이다.
import { Properties } from './properties';


interface CreatedBy {
    // CreatedBy 타입의 속성들을 여기에 정의
    // "object": "user",
    // "id": "b02df1d3-f522-41b2-9cd6-95eaec5339c5"
  }
  
  interface LastEditedBy {
    // LastEditedBy 타입의 속성들을 여기에 정의
    // "object": "user",
    // "id": "b02df1d3-f522-41b2-9cd6-95eaec5339c5"
  }
  
  interface Parent {
    // Parent 타입의 속성들을 여기에 정의
    // "type": "database_id",
    // "database_id": "f38e927f-a194-446a-94ae-5065cc1a42b2"
  }
  
  
  
  export interface Page {
    object: 'page';
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: CreatedBy;
    last_edited_by: LastEditedBy;
    cover: null;
    icon: null;
    parent: Parent;
    archived: boolean;
    properties: Properties;
    url: string;
    public_url: string;
  }
  
  export interface ListResponse {
    object: 'list';
    results: Page[];
    next_cursor: null;
    has_more: boolean;
    type: 'page_or_database';
    page_or_database: {};
  }

  export const Notion = async(): Promise<{[key: string]: number}> => {
    
    const databaseId = 'f38e927fa194446a94ae5065cc1a42b2';
    const secret = 'secret_IYVhpexGlwT7z7w8JZI5rCeqPlcDm6DsAE6wuOzAqfq'
    let mentionCounts : {[key: string]: number}= {};
    try {
      const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        headers: {
          "Authorization": `Bearer ${secret}`,
          "Notion-Version": "2022-02-22"
        },
        method: 'POST',
        body: JSON.stringify({
          "filter": {
            "property": "Created time",
            "date": {
              "on_or_after": "2023-08-07"
            }
          }
        }
        )
      });
  
      const data: ListResponse = await response.json(); // ListResponse는 위에서 정의한 타입입니다.
      // console.log(data.results.map((page) => page.properties.닉네임.rich_text[0].plain_text));
      const items = data.results.map((page) => page.properties.닉네임.rich_text[0].plain_text)
      mentionCounts = countMentions(items);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }


    
    // console.log(mentionCounts);
    return mentionCounts;
  }
  export function countMentions(arr: string[]): { [key: string]: number } {
    let mentionCounts: { [key: string]: number } = {};

    for (const item of arr) {
      if (mentionCounts[item]) {
        mentionCounts[item]++;
      } else {
        mentionCounts[item] = 1;
      }
    }
    // console.log(1,mentionCounts);
    return mentionCounts;
  } 