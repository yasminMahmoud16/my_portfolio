import useProjects from '../../Hooks/useProjects.jsx';
import SharedLayout from '../../Shared/SharedLayout.jsx'
import SharedLoading from '../../Shared/SharedLoading.jsx';
import SharedTitle from '../../Shared/SharedTitle.jsx'
import ProjectsCard from './ProjectsCard/ProjectsCard.jsx'

export default function Projects() {
        const { isLoading } = useProjects();
    
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
