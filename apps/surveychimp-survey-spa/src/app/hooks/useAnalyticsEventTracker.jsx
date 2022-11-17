import ReactGA from 'react-ga4'

const useAnalyticsEventTracker = ({category, value}) => {
  console.log('analytics hook category and value: ', category, value)
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({category, action, label, value});
    }
    return eventTracker;
  }
  export default useAnalyticsEventTracker;