import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {

    return(<>
        <div className="repository-List-Wrapper">
            <RepositoryList />
        </div>
    </>);

}