
// import './OverviewPage.css';
import BackButton from '../../components/BackButton';

const OverviewPage = () => {
    return (
        <div className="overview-container">
            <BackButton />
            <h1>Overview</h1>
            <p>This page provides an overview of your progress and achievements in the eLearning system.</p>
            {/* Additional content can be added here */}
        </div>
    );
};

export default OverviewPage;