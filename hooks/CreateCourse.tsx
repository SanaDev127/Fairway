import { View } from "react-native-reanimated/lib/typescript/Animated";
import { useCourseApi } from "./api";

export const CreateCourse: React.FC = () => {
  const {
    createCourse: { mutation: createCourse, data, isLoading },
  } = useCourseApi();
  /*
// This seems like it works. Make sure to add the full scorecard object. Also remember that this is just for testing
    createCourse({
        id: "dkfjvelmeokdmvedm",
        courseName: "Blue Valley",
        numHoles: 18,
        scorecard: {}
    });
*/
  return <View></View>;
};
