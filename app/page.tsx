import Banner from "../components/banner";
import { NotebookList } from "../components/notebooks";
import Vantagens from "../components/vantagens";
import VideoHome from "../components/videoHome";
import notebooksData from "../data/notebooks.json";
import Footer from "../components/footer";

export default function Home() {
  return (
   <div className="flex flex-col ">
      <Banner />
      <Vantagens />
      <VideoHome />
      <NotebookList notebooks={notebooksData} />
      <Footer />
    </div>
  );
}

