import React from 'react';

const Lista = () => {
  const containerStyle = {
    backgroundColor: '#394F78',
    color: '#00FFE0',
    textAlign: 'center',
    padding: '20px',
  };

  const buttonContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#2A88F6',
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '500px',
  };

  const openNewsPage = () => {
    window.open('/News', '_blank');
  };

  const openSportPage = () => {
    window.open('https://telegrafi.com/sport/', '_blank');
  };

  const openCulturePage = () => {
    window.open('https://shqiptarja.com/kategoria/kultura/1280', '_blank');
  };

  const openHealthPage = () => {
    window.open('https://telegrafi.com/shendetesi/', '_blank');
  };

  const openTechnologyPage = () => {
    window.open('https://www.balkanweb.com/kategoria/teknologji/#gsc.tab=0', '_blank');
  };

  const openPoliticsPage = () => {
    window.open('https://top-channel.tv/artikuj/vendi/politike/', '_blank');
  };

  const openEconomyPage = () => {
    window.open('https://zeri.info/ekonomia/', '_blank');
  };

  const openShowbizPage = () => {
    window.open('https://www.botasot.info/showbiz/', '_blank');
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#00FFE0',fontSize: '60px' }}>LISTA</h1>
      <div style={buttonContainer}>
        <button style={buttonStyle} onClick={openNewsPage}>
          Lajmet e dites
        </button>
        <button style={buttonStyle} onClick={openSportPage}>
          Sporti ne fokus
        </button>
        <button style={buttonStyle} onClick={openCulturePage}>
          Kultura dhe arti
        </button>
        <button style={buttonStyle} onClick={openHealthPage}>
          Shendetesia dhe stili i jeteses
        </button>
        <button style={buttonStyle} onClick={openTechnologyPage}>
          Teknologji
        </button>
        <button style={buttonStyle} onClick={openPoliticsPage}>
          Politike
        </button>
        <button style={buttonStyle} onClick={openEconomyPage}>
          Ekonomi
        </button>
        <button style={buttonStyle} onClick={openShowbizPage}>
          Showbiz
        </button>
      </div>
    </div>
  );
};

export default Lista;
