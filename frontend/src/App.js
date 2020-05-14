import React, {useCallback} from 'react';
import { Header } from './components/header/Header';
import { SharesList } from './components/shares-list/SharesList';
import { isNil } from 'lodash'
import { useShares } from './hooks/useShares';

function App() {
  const {shares, pending, error} = useShares();

  const renderContent = useCallback(() => {
    if(error && !pending) {
      return <>Error</>
    } else if(isNil(shares) || pending) {
      return <>Loading...</>
    }
    
    return <SharesList shares={shares}/>
  }, [shares, pending, error])

  return (
    <div className="App">
      <Header />
      {renderContent()}
    </div>
  );
}

export default App;
