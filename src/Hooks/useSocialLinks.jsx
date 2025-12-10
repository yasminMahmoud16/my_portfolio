import { useQuery } from "@tanstack/react-query";

export default function useSocialLinks() {
  
    const fetchSocialLinks = async () => {
      const fetchData = await fetch("http://localhost:5000/socialLinks");
      const res = await fetchData.json();
      console.log("social res:", res);

      return res;
    };

      const { data, isLoading, error } = useQuery({
        queryKey: ["fetchSocialLinks"],
        queryFn: fetchSocialLinks,
      });
    return {
      data,
      isLoading,
      error,
    };
}
