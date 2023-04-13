import Video from "../components/notion-blocks/video"
import type { NextPage } from 'next'
// const block ={url:"https://youtu.be/HB3kZKfMm-s",};

const block = {
    Id: '04d8f9f6-5bd4-498f-ac62-c71f5f4d3ade',
    Type: 'video',
    HasChildren: false,
    Video: {
      Type: 'external',
      External: { Url: 'https://youtu.be/fWeBV77UEvs' }
    }
  }

const Home: NextPage = ({block}:any) => {

    block = {
        Id: '04d8f9f6-5bd4-498f-ac62-c71f5f4d3ade',
        Type: 'video',
        HasChildren: false,
        Video: {
          Type: 'external',
          External: { Url: 'https://youtu.be/fWeBV77UEvs' }
        }
      }

    return (
      <>
     
     <Video block={block} />
      </>
    )
  }
  
  export default Home