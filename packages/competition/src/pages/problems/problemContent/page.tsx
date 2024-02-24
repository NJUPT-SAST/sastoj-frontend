import { useParams } from "react-router-dom";

const ProblemContent = () => {
  const routerParams = useParams();

  return <>this is problem content{routerParams.problemId}</>;
};

export default ProblemContent;
