import { useEffect, useState } from "react";
import { getRoadmap } from "../services/roadmap.service";

export default function useRoadmap() {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadRoadmap() {
    console.log("Loading roadmap...");

    try {
      const data = await getRoadmap();

      console.log("Roadmap API Response:", data);

      setRoadmap(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  loadRoadmap();
}, []);

  return {
    roadmap,
    loading,
  };
}