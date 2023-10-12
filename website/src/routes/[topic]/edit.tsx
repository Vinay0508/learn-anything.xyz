import GuideEdit from "../../components/Topic/GuideEdit"
import GuideSidebar from "../../components/Topic/GuideSidebar"
// import TitlePill from "../../components/Topic/TitlePill"
import TopicNav from "../../components/Topic/TopicNav"

import { useGlobalTopic } from "../../GlobalContext/global-topic"

export default function EditGuide() {
  const topic = useGlobalTopic()

  return (
    <>
      <style>{`
   #InfoSidebar {
    display: none;
  }
  #InfoMain {
    width: 100%;
  }
  #InfoOptions {
    display: none;
  }

@media (min-width: 700px) {
  #InfoSidebar {
    display: flex;
  }
  #InfoMain {
    width: 70%;
  }
  #InfoOptions {
    display: flex
  }
}
      `}</style>
      <div class="w-screen h-full fixed top-0 left-0 text-black bg-white dark:bg-neutral-900">
        <TopicNav />
        {/* <div class="w-full" style={{ padding: "24px 24px 0 24px" }}>
          <TitlePill />
        </div> */}

        <div class="h-full w-full flex justify-center">
          <div
            id="InfoMain"
            class="h-full bg-white overflow-auto  dark:bg-[#1C1C1C] w-full min-h-screen flex  gap-6 flex-col"
            style={{ padding: "24px 20px 24px 20px" }}
          >
            <GuideEdit />
          </div>
          <div
            id="InfoSidebar"
            class="h-full min-h-screen dark:bg-[#161616]  border-l-[0.5px] border-[#69696951] w-[25%]"
          >
            <GuideSidebar></GuideSidebar>
          </div>
          {/* TODO: only here because commenting below block failed.. */}
          {/* add this when we have the data from server for who is learning the topic..  */}
        </div>
      </div>
    </>
  )
}
