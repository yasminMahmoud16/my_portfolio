import { useQuery } from "@tanstack/react-query";

export default function useSkills() {
    const fetchSkills = async () => {
        const fetchData = await fetch("http://localhost:5000/tools");
        const res = await fetchData.json();
        console.log(res);
        return res;
        
    }

      const { data, isLoading, error } = useQuery({
        queryKey: ["fetchSkills"],
        queryFn: fetchSkills,
      });
    return {
      data,
      isLoading,
      error,
    };
}
