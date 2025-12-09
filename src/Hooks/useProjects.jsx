import { useQuery } from "@tanstack/react-query";

export default function useProjects() {
    const fetchProjects = async () => {
        const fetchData = await fetch("http://localhost:5000/projects");
        const res = await fetchData.json();
        console.log(res);
        return res;
        
    }

      const { data, isLoading, error } = useQuery({
        queryKey: ["fetchProjects"],
        queryFn: fetchProjects,
      });
    return {
      data,
      isLoading,
      error,
    };
}
