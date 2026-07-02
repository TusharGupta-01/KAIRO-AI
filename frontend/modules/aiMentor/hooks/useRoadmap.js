// import { useEffect, useState } from "react";
// import { getRoadmap } from "../services/roadmap.service";

// export default function useRoadmap() {
//   const [roadmap, setRoadmap] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   async function loadRoadmap() {
//     console.log("Loading roadmap...");

//     try {
//       const data = await getRoadmap();

//       console.log("Roadmap API Response:", data);

//       setRoadmap(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   loadRoadmap();
// }, []);

//   return {
//     roadmap,
//     loading,
//   };
// }
import { useEffect, useState } from "react";
import { getRoadmap } from "../services/roadmap.service";

export default function useRoadmap() {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    async function loadRoadmap() {
      try {
        const data = await getRoadmap();

        setRoadmap(data);
        setLoading(false);
      } catch (err) {
        // If roadmap not ready, try again after 2 seconds
        if (err.response?.status === 404) {
          timer = setTimeout(loadRoadmap, 2000);
        } else {
          console.error(err);
          setLoading(false);
        }
      }
    }

    loadRoadmap();

    return () => clearTimeout(timer);
  }, []);

  return {
    roadmap,
    loading,
  };
}