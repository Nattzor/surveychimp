import ReactGA from 'react-ga4'

const useAnalyticsEventTracker = (category) => {
  console.log('analytics hook category: ', category)
    const eventTracker = (action = "Halloj", label = "test label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
  export default useAnalyticsEventTracker;