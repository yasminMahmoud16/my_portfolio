import { useEffect, useState } from 'react';
import SharedLayout from '../../Shared/SharedLayout.jsx'
import SharedLoading from '../../Shared/SharedLoading.jsx';
import SharedTitle from '../../Shared/SharedTitle.jsx'
import ProjectsCard from './ProjectsCard/ProjectsCard.jsx'

export default function Projects() {
  const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(true);
  
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, []);
    return (
      <>
        <SharedLayout>
          <SharedTitle title="Projects" />
          {isLoading ? <SharedLoading /> :
            
          <div className=" ">
            <ProjectsCard />
          </div>
          }
        </SharedLayout>
      </>
    );
}
