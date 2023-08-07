import { ListResponse } from "@/src/api/notion/database";
import { Notion } from '@/src/api/notion/database';
import { Ranking } from "@/src/components/Notion/ranking";
import { track } from "@amplitude/analytics-browser";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

        
export default async function RankingPage(){

  return (
    <div> 
      <Ranking data={Notion()}></Ranking> 
    </div>
  )
      
}


