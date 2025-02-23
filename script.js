// Question bank with Telugu answers
const questionBank = [
    { question: "I ate", answer: "నేను తిన్నాను", type: "SV" }, 
    { question: "I will eat", answer: "నేను తింటాను", type: "SV" }, 
    { question: "I am eating", answer: "నేను తింటున్నాను", type: "SV" }, 
    { question: "I drank", answer: "నేను తాగాను", type: "SV" }, 
    { question: "I will drink", answer: "నేను తాగుతాను", type: "SV" }, 
    { question: "I am drinking", answer: "నేను తాగుతున్నాను", type: "SV" }, 
    { question: "I did", answer: "నేను చేసాను", type: "SV" }, 
    { question: "I will do", answer: "నేను చేస్తాను", type: "SV" }, 
    { question: "I am doing", answer: "నేను చేస్తున్నాను", type: "SV" }, 
    { question: "I put", answer: "నేను ఉంచాను", type: "SV" }, 
    { question: "I will put", answer: "నేను ఉంచుతాను", type: "SV" }, 
    { question: "I am putting", answer: "నేను ఉంచుతున్నాను", type: "SV" }, 
    { question: "I thought", answer: "నేను అనుకున్నాను", type: "SV" }, 
    { question: "I will think", answer: "నేను ఆలోచిస్తాను", type: "SV" }, 
    { question: "I am thinking", answer: "నేను ఆలోచిస్తున్నాను", type: "SV" }, 
    { question: "I bought", answer: "నేను కొన్నాను", type: "SV" }, 
    { question: "I will buy", answer: "నేను కొనుగోలు చేస్తాను", type: "SV" }, 
    { question: "I am buying", answer: "నేను కొనుగోలు చేస్తున్నాను", type: "SV" }, 
    { question: "I saw", answer: "నేను చూశాను", type: "SV" }, 
    { question: "I will see", answer: "నేను చూస్తాను", type: "SV" }, 
    { question: "I am seeing", answer: "నేను చూస్తున్నాను", type: "SV" }, 
    { question: "I watched", answer: "నేను చూశాను", type: "SV" }, 
    { question: "I will watch", answer: "నేను చూస్తాను", type: "SV" }, 
    { question: "I am watching", answer: "నేను చూస్తున్నాను", type: "SV" }, 
    { question: "I read", answer: "నేను చదివాను", type: "SV" }, 
    { question: "I will read", answer: "నేను చదువుతాను", type: "SV" }, 
    { question: "I am reading", answer: "నేను చదువుతున్నాను", type: "SV" }, 
    { question: "I studied", answer: "నేను చదువుకున్నాను", type: "SV" }, 
    { question: "I will study", answer: "నేను చదువుతాను", type: "SV" }, 
    { question: "I am studying", answer: "నేను చదువుతున్నాను", type: "SV" }, 
    { question: "I applied", answer: "నేను దరఖాస్తు చేసుకున్నాను", type: "SV" }, 
    { question: "I will apply", answer: "నేను దరఖాస్తు చేస్తాను", type: "SV" }, 
    { question: "I am applying", answer: "నేను దరఖాస్తు చేస్తున్నాను", type: "SV" }, 
    { question: "I wrote", answer: "నేను రాశాను", type: "SV" }, 
    { question: "I will write", answer: "నేను వ్రాస్తాను", type: "SV" }, 
    { question: "I am writing", answer: "నేను వ్రాస్తున్నాను", type: "SV" }, 
    { question: "I listened", answer: "నేను విన్నాను", type: "SV" }, 
    { question: "I will listen", answer: "నేను వింటాను", type: "SV" }, 
    { question: "I am listening", answer: "నేను వింటున్నాను", type: "SV" }, 
    { question: "You ate", answer: "మీరు తిన్నారు", type: "SV" }, 
    { question: "You will eat", answer: "మీరు తింటారు", type: "SV" }, 
    { question: "You are eating", answer: "మీరు తింటున్నారు", type: "SV" }, 
    { question: "You drank", answer: "మీరు తాగారు", type: "SV" }, 
    { question: "You will drink", answer: "మీరు తాగుతారు", type: "SV" }, 
    { question: "You are drinking", answer: "మీరు తాగుతున్నారు", type: "SV" }, 
    { question: "You did", answer: "మీరు చేసారు", type: "SV" }, 
    { question: "You will do", answer: "మీరు చేస్తారు", type: "SV" }, 
    { question: "You are doing", answer: "మీరు చేస్తున్నారు", type: "SV" }, 
    { question: "You put", answer: "మీరు ఉంచండి", type: "SV" }, 
    { question: "You will put", answer: "మీరు ఉంచుతారు", type: "SV" }, 
    { question: "You are putting", answer: "మీరు వేస్తున్నారు", type: "SV" }, 
    { question: "You thought", answer: "మీరు అనుకున్నారు", type: "SV" }, 
    { question: "You will think", answer: "మీరు ఆలోచిస్తారు", type: "SV" }, 
    { question: "You are thinking", answer: "మీరు ఆలోచిస్తున్నారు", type: "SV" }, 
    { question: "You bought", answer: "మీరు కొన్నారు", type: "SV" }, 
    { question: "You will buy", answer: "మీరు కొనుగోలు చేస్తారు", type: "SV" }, 
    { question: "You are buying", answer: "మీరు కొనుగోలు చేస్తున్నారు", type: "SV" }, 
    { question: "You saw", answer: "మీరు చూశారు", type: "SV" }, 
    { question: "You will see", answer: "మీరు చూస్తారు", type: "SV" }, 
    { question: "You are seeing", answer: "మీరు చూస్తున్నారు", type: "SV" }, 
    { question: "You watched", answer: "మీరు చూశారు", type: "SV" }, 
    { question: "You will watch", answer: "మీరు చూస్తారు", type: "SV" }, 
    { question: "You are watching", answer: "మీరు చూస్తున్నారు", type: "SV" }, 
    { question: "You read", answer: "మీరు చదివారు", type: "SV" }, 
    { question: "You will read", answer: "మీరు చదువుతారు", type: "SV" }, 
    { question: "You are reading", answer: "మీరు చదువుతున్నారు", type: "SV" }, 
    { question: "You studied", answer: "మీరు చదువుకున్నారు", type: "SV" }, 
    { question: "You will study", answer: "మీరు చదువుతారు", type: "SV" }, 
    { question: "You are studying", answer: "మీరు చదువుతున్నారు", type: "SV" }, 
    { question: "You applied", answer: "మీరు దరఖాస్తు చేసుకున్నారు", type: "SV" }, 
    { question: "You will apply", answer: "మీరు దరఖాస్తు చేస్తారు", type: "SV" }, 
    { question: "You are applying", answer: "మీరు దరఖాస్తు చేస్తున్నారు", type: "SV" }, 
    { question: "You wrote", answer: "మీరు రాశారు", type: "SV" }, 
    { question: "You will write", answer: "మీరు వ్రాస్తారు", type: "SV" }, 
    { question: "You are writing", answer: "మీరు వ్రాస్తున్నారు", type: "SV" }, 
    { question: "You listened", answer: "మీరు విన్నారు", type: "SV" }, 
    { question: "You will listen", answer: "మీరు వింటారు", type: "SV" }, 
    { question: "You are listening", answer: "మీరు వింటున్నారు", type: "SV" }, 
    { question: "She ate", answer: "ఆమె తిన్నది", type: "SV" }, 
    { question: "It ate", answer: "అది తిన్నది", type: "SV" }, 
    { question: "She will eat", answer: "ఆమె తింటుంది", type: "SV" }, 
    { question: "It will eat", answer: "అది తింటుంది", type: "SV" }, 
    { question: "She is eating", answer: "ఆమె తినడం", type: "SV" }, 
    { question: "It is eating", answer: "అది తినడం", type: "SV" }, 
    { question: "She drank", answer: "ఆమె తాగింది", type: "SV" }, 
    { question: "It drank", answer: "అది తాగింది", type: "SV" }, 
    { question: "She will drink", answer: "ఆమె తాగుతుంది", type: "SV" }, 
    { question: "It will drink", answer: "అది తాగుతుంది", type: "SV" }, 
    { question: "She is drinking", answer: "ఆమె తాగుతోంది", type: "SV" }, 
    { question: "It is drinking", answer: "అది తాగుతోంది", type: "SV" }, 
    { question: "She did", answer: "ఆమె చేసింది", type: "SV" }, 
    { question: "It did", answer: "అది చేసింది", type: "SV" }, 
    { question: "She will do", answer: "ఆమె చేస్తుంది", type: "SV" }, 
    { question: "It will do", answer: "ఇది చేస్తుంది", type: "SV" }, 
    { question: "She is doing", answer: "ఆమె చేస్తోంది", type: "SV" }, 
    { question: "It is doing", answer: "ఇది చేస్తోంది", type: "SV" }, 
    { question: "She put", answer: "ఆమె ఉంచారు", type: "SV" }, 
    { question: "It put", answer: "అది ఉంచారు", type: "SV" }, 
    { question: "She will put", answer: "ఆమె ఉంచుతుంది", type: "SV" }, 
    { question: "It will put", answer: "అది ఉంచుతుంది", type: "SV" }, 
    { question: "She is putting", answer: "ఆమె ఉంచుతోంది", type: "SV" }, 
    { question: "It is putting", answer: "అది ఉంచుతోంది", type: "SV" }, 
    { question: "She thought", answer: "ఆమె అనుకుంది", type: "SV" }, 
    { question: "It thought", answer: "ఇది అనుకుంది", type: "SV" }, 
    { question: "She will think", answer: "ఆమె ఆలోచిస్తుంది", type: "SV" }, 
    { question: "It will think", answer: "ఇది ఆలోచిస్తుంది", type: "SV" }, 
    { question: "She is thinking", answer: "ఆమె ఆలోచిస్తోంది", type: "SV" }, 
    { question: "It is thinking", answer: "ఇది ఆలోచిస్తోంది", type: "SV" }, 
    { question: "She bought", answer: "ఆమె కొన్నారు", type: "SV" }, 
    { question: "It bought", answer: "అది కొన్నారు", type: "SV" }, 
    { question: "She will buy", answer: "ఆమె కొనుగోలు చేస్తుంది", type: "SV" }, 
    { question: "It will buy", answer: "ఇది కొనుగోలు చేస్తుంది", type: "SV" }, 
    { question: "She is buying", answer: "ఆమె కొనుగోలు చేస్తోంది", type: "SV" }, 
    { question: "It is buying", answer: "అది కొనుగోలు చేస్తోంది", type: "SV" }, 
    { question: "She saw", answer: "ఆమె చూసింది", type: "SV" }, 
    { question: "It saw", answer: "అది చూసింది", type: "SV" }, 
    { question: "She will see", answer: "ఆమె చూస్తుంది", type: "SV" }, 
    { question: "It will see", answer: "ఇది చూస్తుంది", type: "SV" }, 
    { question: "She is seeing", answer: "ఆమె చూస్తోంది", type: "SV" }, 
    { question: "It is seeing", answer: "ఇది చూస్తోంది", type: "SV" }, 
    { question: "She watched", answer: "ఆమె చూసింది", type: "SV" }, 
    { question: "It watched", answer: "ఇది చూసింది", type: "SV" }, 
    { question: "She will watch", answer: "ఆమె చూస్తుంది", type: "SV" }, 
    { question: "It will watch", answer: "ఇది చూస్తుంది", type: "SV" }, 
    { question: "She is watching", answer: "ఆమె చూస్తోంది", type: "SV" }, 
    { question: "It is watching", answer: "ఇది చూస్తోంది", type: "SV" }, 
    { question: "She read", answer: "ఆమె చదివింది", type: "SV" }, 
    { question: "It read", answer: "ఇది చదివింది", type: "SV" }, 
    { question: "She will read", answer: "ఆమె చదువుతుంది", type: "SV" }, 
    { question: "It will read", answer: "ఇది చదువుతుంది", type: "SV" }, 
    { question: "She is reading", answer: "ఆమె చదువుతోంది", type: "SV" }, 
    { question: "It is reading", answer: "ఇది చదువుతోంది", type: "SV" }, 
    { question: "She studied", answer: "ఆమె చదువుకుంది", type: "SV" }, 
    { question: "It studied", answer: "ఇది అధ్యయనం చేసింది", type: "SV" }, 
    { question: "She will study", answer: "ఆమె చదువుతుంది", type: "SV" }, 
    { question: "It will study", answer: "ఇది అధ్యయనం చేస్తుంది", type: "SV" }, 
    { question: "She is studying", answer: "ఆమె చదువుతోంది", type: "SV" }, 
    { question: "It is studying", answer: "ఇది చదువుతోంది", type: "SV" }, 
    { question: "She applied", answer: "ఆమె దరఖాస్తు చేసింది", type: "SV" }, 
    { question: "It applied", answer: "ఇది వర్తింపజేసింది", type: "SV" }, 
    { question: "She will apply", answer: "ఆమె దరఖాస్తు చేస్తుంది", type: "SV" }, 
    { question: "It will apply", answer: "ఇది వర్తిస్తుంది", type: "SV" }, 
    { question: "She is applying", answer: "ఆమె దరఖాస్తు చేస్తోంది", type: "SV" }, 
    { question: "It is applying", answer: "ఇది వర్తిస్తుంది", type: "SV" }, 
    { question: "She wrote", answer: "ఆమె రాసింది", type: "SV" }, 
    { question: "It wrote", answer: "అది రాసింది", type: "SV" }, 
    { question: "She will write", answer: "ఆమె వ్రాస్తుంది", type: "SV" }, 
    { question: "It will write", answer: "ఇది వ్రాస్తుంది", type: "SV" }, 
    { question: "She is writing", answer: "ఆమె వ్రాస్తోంది", type: "SV" }, 
    { question: "It is writing", answer: "ఇది వ్రాస్తోంది", type: "SV" }, 
    { question: "She listened", answer: "ఆమె విన్నది", type: "SV" }, 
    { question: "It listened", answer: "ఇది విన్నది", type: "SV" }, 
    { question: "She will listen", answer: "ఆమె వింటుంది", type: "SV" }, 
    { question: "It will listen", answer: "ఇది వింటుంది", type: "SV" }, 
    { question: "She is listening", answer: "ఆమె వింటుస్తోంది", type: "SV" }, 
    { question: "It is listeningWe ate", answer: "ఇది వింటున్న మేము తిన్నాను", type: "SV" }, 
    { question: "We will eat", answer: "మేము తింటాము", type: "SV" }, 
    { question: "We are eating", answer: "మేము తింటున్నాము", type: "SV" }, 
    { question: "We drank", answer: "మేము తాగాము", type: "SV" }, 
    { question: "We will drink", answer: "మేము తాగుతాము", type: "SV" }, 
    { question: "We are drinking", answer: "మేము తాగుతున్నాము", type: "SV" }, 
    { question: "We did", answer: "మేము చేసాము", type: "SV" }, 
    { question: "We will do", answer: "మేము చేస్తాము", type: "SV" }, 
    { question: "We are doing", answer: "మేము చేస్తున్నాము", type: "SV" }, 
    { question: "We put", answer: "మేము ఉంచాము", type: "SV" }, 
    { question: "We will put", answer: "మేము ఉంచుతాము", type: "SV" }, 
    { question: "We are putting", answer: "మేము వేస్తున్నాము", type: "SV" }, 
    { question: "We thought", answer: "మేము అనుకున్నాము", type: "SV" }, 
    { question: "We will think", answer: "మేము ఆలోచిస్తాము", type: "SV" }, 
    { question: "We are thinking", answer: "మేము ఆలోచిస్తున్నాము", type: "SV" }, 
    { question: "We bought", answer: "మేము కొన్నాము", type: "SV" }, 
    { question: "We will buy", answer: "మేము కొనుగోలు చేస్తాము", type: "SV" }, 
    { question: "We are buying", answer: "మేము కొనుగోలు చేస్తున్నాము", type: "SV" }, 
    { question: "We saw", answer: "మేము చూశాము", type: "SV" }, 
    { question: "We will see", answer: "మేము చూస్తాము", type: "SV" }, 
    { question: "We are seeing", answer: "మేము చూస్తున్నాము", type: "SV" }, 
    { question: "We watched", answer: "మేము చూశాము", type: "SV" }, 
    { question: "We will watch", answer: "మేము చూస్తాము", type: "SV" }, 
    { question: "We are watching", answer: "మేము చూస్తున్నాము", type: "SV" }, 
    { question: "We read", answer: "మేము చదివాము", type: "SV" }, 
    { question: "We will read", answer: "మేము చదువుతాము", type: "SV" }, 
    { question: "We are reading", answer: "మేము చదువుతున్నాము", type: "SV" }, 
    { question: "We studied", answer: "మేము అధ్యయనం చేసాము", type: "SV" }, 
    { question: "We will study", answer: "మేము చదువుతాము", type: "SV" }, 
    { question: "We are studying", answer: "మేము చదువుతున్నాము", type: "SV" }, 
    { question: "We applied", answer: "మేము దరఖాస్తు చేసాము", type: "SV" }, 
    { question: "We will apply", answer: "మేము దరఖాస్తు చేస్తాము", type: "SV" }, 
    { question: "We are applying", answer: "మేము దరఖాస్తు చేస్తున్నాము", type: "SV" }, 
    { question: "We wrote", answer: "మేము వ్రాసాము", type: "SV" }, 
    { question: "We will write", answer: "మేము వ్రాస్తాము", type: "SV" }, 
    { question: "We are writing", answer: "మేము వ్రాస్తున్నాము", type: "SV" }, 
    { question: "We listened", answer: "మేము విన్నాము", type: "SV" }, 
    { question: "We will listen", answer: "మేము వింటాము", type: "SV" }, 
    { question: "We are listening", answer: "మేము వింటున్నాము", type: "SV" }, 
    { question: "You all ate", answer: "మీరందరూ తిన్నారు", type: "SV" }, 
    { question: "You all will eat", answer: "మీరందరూ తింటారు", type: "SV" }, 
    { question: "You all are eating", answer: "మీరందరూ తింటున్నారు", type: "SV" }, 
    { question: "You all drank", answer: "మీరందరూ తాగారు", type: "SV" }, 
    { question: "You all will drink", answer: "మీరందరూ తాగుతారు", type: "SV" }, 
    { question: "You all are drinking", answer: "మీరందరూ తాగుతున్నారు", type: "SV" }, 
    { question: "You all did", answer: "మీరంతా చేసారు", type: "SV" }, 
    { question: "You all will do", answer: "మీరంతా చేస్తారు", type: "SV" }, 
    { question: "You all are doing", answer: "మీరంతా చేస్తున్నారు", type: "SV" }, 
    { question: "You all put", answer: "మీరంతా ఉంచారు", type: "SV" }, 
    { question: "You all will put", answer: "మీరందరూ ఉంచుతారు", type: "SV" }, 
    { question: "You all are putting", answer: "మీరంతా ఉంచారు", type: "SV" }, 
    { question: "You all thought", answer: "మీరంతా ఆలోచించారు", type: "SV" }, 
    { question: "You all will think", answer: "మీరందరూ ఆలోచిస్తారు", type: "SV" }, 
    { question: "You all are thinking", answer: "మీరంతా ఆలోచిస్తున్నారు", type: "SV" }, 
    { question: "You all bought", answer: "మీరందరూ కొన్నారు", type: "SV" }, 
    { question: "You all will buy", answer: "మీరందరూ కొనుగోలు చేస్తారు", type: "SV" }, 
    { question: "You all are buying", answer: "మీరందరూ కొనుగోలు చేస్తున్నారు", type: "SV" }, 
    { question: "You all saw", answer: "మీరందరూ చూశారు", type: "SV" }, 
    { question: "You all will see", answer: "మీరందరూ చూస్తారు", type: "SV" }, 
    { question: "You all are seeing", answer: "మీరందరూ చూస్తున్నారు", type: "SV" }, 
    { question: "You all watched", answer: "మీరందరూ చూశారు", type: "SV" }, 
    { question: "You all will watch", answer: "మీరందరూ చూస్తారు", type: "SV" }, 
    { question: "You all are watching", answer: "మీరంతా చూస్తున్నారు", type: "SV" }, 
    { question: "You all read", answer: "మీరందరూ చదవండి", type: "SV" }, 
    { question: "You all will read", answer: "మీరందరూ చదువుతారు", type: "SV" }, 
    { question: "You all are reading", answer: "మీరందరూ చదువుతున్నారు", type: "SV" }, 
    { question: "You all studied", answer: "మీరందరూ చదువుకున్నారు", type: "SV" }, 
    { question: "You all will study", answer: "మీరందరూ చదువుతారు", type: "SV" }, 
    { question: "You all are studying", answer: "మీరందరూ చదువుతున్నారు", type: "SV" }, 
    { question: "You all applied", answer: "మీరందరూ దరఖాస్తు చేసుకున్నారు", type: "SV" }, 
    { question: "You all will apply", answer: "మీరందరూ దరఖాస్తు చేస్తారు", type: "SV" }, 
    { question: "You all are applying", answer: "మీరందరూ దరఖాస్తు చేస్తున్నారు", type: "SV" }, 
    { question: "You all wrote", answer: "మీరందరూ రాశారు", type: "SV" }, 
    { question: "You all will write", answer: "మీరందరూ వ్రాస్తారు", type: "SV" }, 
    { question: "You all are writing", answer: "మీరంతా వ్రాస్తున్నారు", type: "SV" }, 
    { question: "You all listened", answer: "మీరందరూ విన్నారు", type: "SV" }, 
    { question: "You all will listen", answer: "మీరందరూ వింటారు", type: "SV" }, 
    { question: "You all are listening", answer: "మీరందరూ వింటున్నారు", type: "SV" }, 
    { question: "They ate", answer: "వారు తిన్నారు", type: "SV" }, 
    { question: "They will eat", answer: "వారు తింటారు", type: "SV" }, 
    { question: "They are eating", answer: "వారు తింటున్నారు", type: "SV" }, 
    { question: "They drank", answer: "వారు తాగారు", type: "SV" }, 
    { question: "They will drink", answer: "వారు తాగుతారు", type: "SV" }, 
    { question: "They are drinking", answer: "వారు తాగుతున్నారు", type: "SV" }, 
    { question: "They did", answer: "వారు చేసారు", type: "SV" }, 
    { question: "They will do", answer: "వారు చేస్తారు", type: "SV" }, 
    { question: "They are doing", answer: "వారు చేస్తున్నారు", type: "SV" }, 
    { question: "They put", answer: "వారు ఉంచారు", type: "SV" }, 
    { question: "They will put", answer: "వారు ఉంచుతారు", type: "SV" }, 
    { question: "They are putting", answer: "వారు వేస్తున్నారు", type: "SV" }, 
    { question: "They thought", answer: "వారు అనుకున్నారు", type: "SV" }, 
    { question: "They will think", answer: "వారు ఆలోచిస్తారు", type: "SV" }, 
    { question: "They are thinking", answer: "వారు ఆలోచిస్తున్నారు", type: "SV" }, 
    { question: "They bought", answer: "వారు కొన్నారు", type: "SV" }, 
    { question: "They will buy", answer: "వారు కొనుగోలు చేస్తారు", type: "SV" }, 
    { question: "They are buying", answer: "వారు కొనుగోలు చేస్తున్నారు", type: "SV" }, 
    { question: "They saw", answer: "వారు చూశారు", type: "SV" }, 
    { question: "They will see", answer: "వారు చూస్తారు", type: "SV" }, 
    { question: "They are seeing", answer: "వారు చూస్తున్నారు", type: "SV" }, 
    { question: "They watched", answer: "వారు చూశారు", type: "SV" }, 
    { question: "They will watch", answer: "వారు చూస్తారు", type: "SV" }, 
    { question: "They are watching", answer: "వారు చూస్తున్నారు", type: "SV" }, 
    { question: "They read", answer: "వారు చదివారు", type: "SV" }, 
    { question: "They will read", answer: "వారు చదువుతారు", type: "SV" }, 
    { question: "They are reading", answer: "వారు చదువుతున్నారు", type: "SV" }, 
    { question: "They studied", answer: "వారు చదువుకున్నారు", type: "SV" }, 
    { question: "They will study", answer: "వారు చదువుతారు", type: "SV" }, 
    { question: "They are studying", answer: "వారు చదువుతున్నారు", type: "SV" }, 
    { question: "They applied", answer: "వారు దరఖాస్తు చేసుకున్నారు", type: "SV" }, 
    { question: "They will apply", answer: "అవి వర్తిస్తాయి", type: "SV" }, 
    { question: "They are applying", answer: "వారు దరఖాస్తు చేస్తున్నారు", type: "SV" }, 
    { question: "They wrote", answer: "వారు రాశారు", type: "SV" }, 
    { question: "They will write", answer: "వారు వ్రాస్తారు", type: "SV" }, 
    { question: "They are writing", answer: "వారు వ్రాస్తున్నారు", type: "SV" }, 
    { question: "They listened", answer: "వారు విన్నారు", type: "SV" }, 
    { question: "They will listen", answer: "వారు వింటారు", type: "SV" }, 
    { question: "They are listening", answer: "వారు వింటున్నారు", type: "SV" }
];

let currentQuestionIndex = 0;
let streak = 0;
let incorrectAnswers = 0;
let correctAnswers = 0;

// New tracking variables for each question type
let questionTypeStats = {
    SV: { total: 0, correct: 0 },
    // general: { total: 0, correct: 0 },
    // geography: { total: 0, correct: 0 },
    // science: { total: 0, correct: 0 },
    // literature: { total: 0, correct: 0 }
};

const questionElement = document.getElementById('question');
const userAnswerElement = document.getElementById('user-answer');
const submitButton = document.getElementById('submit-answer');
const feedbackElement = document.getElementById('feedback');
const nextQuestionButton = document.getElementById('next-question');
const viewResultsButton = document.getElementById('view-results'); // New button for results page
const wrongAnswerCounter = document.getElementById('wrong-answer-counter'); // Counter for wrong answers

submitButton.addEventListener('click', checkAnswer);
nextQuestionButton.addEventListener('click', goToNextQuestion);
viewResultsButton.addEventListener('click', goToResultsPage);

// Shuffle the question bank randomly
function shuffleQuestions() {
    for (let i = questionBank.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionBank[i], questionBank[j]] = [questionBank[j], questionBank[i]]; // Swap elements
    }
}

function displayQuestion() {
    const currentQuestion = questionBank[currentQuestionIndex];
    
    // Track question type statistics
    questionTypeStats[currentQuestion.type].total++;

    questionElement.textContent = currentQuestion.question;
    userAnswerElement.value = "";
    feedbackElement.textContent = "";
    submitButton.style.display = 'block';
    nextQuestionButton.style.display = 'none';
    viewResultsButton.style.display = 'none'; // Hide the "View Results" button initially
}

function checkAnswer() {
    const userAnswer = userAnswerElement.value.trim().normalize("NFC"); // Normalize input
    const correctAnswer = questionBank[currentQuestionIndex].answer.normalize("NFC"); // Normalize answer

    // Ensure the user has entered an answer before submitting
    if (!userAnswer) {
        feedbackElement.textContent = "Please enter an answer!";
        feedbackElement.style.color = 'D06224';
        return;
    }

    const currentQuestion = questionBank[currentQuestionIndex];
    
    if (userAnswer === correctAnswer) {
        correctAnswers++;
        streak++;
        questionTypeStats[currentQuestion.type].correct++; // Track correct answers per type
        feedbackElement.textContent = 'Correct!';
        confetti({
            particleCount: 100,
            colors: ['#8A8635', '#AE431E'],
            spread: 70,
            origin: { y: 0.6 }
        });
        feedbackElement.style.color = '#8A8635';
    } else {
        incorrectAnswers++;
        streak = 0;  // Reset streak on wrong answer
        feedbackElement.textContent = `Wrong! It is: ${questionBank[currentQuestionIndex].answer}`;
        feedbackElement.style.color = '#D06224';
    }

    // Update the wrong answer counter
    wrongAnswerCounter.textContent = `Incorrect Answers: ${incorrectAnswers}`;

    submitButton.style.display = 'none';
    nextQuestionButton.style.display = 'block';

    if (incorrectAnswers >= 3 || currentQuestionIndex === questionBank.length - 1) {
        endGame();
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questionBank.length) {
        endGame();
    } else {
        displayQuestion();
    }
}

function endGame() {
    // Hide next question button and show "View Results" button
    nextQuestionButton.style.display = 'none';
    viewResultsButton.style.display = 'block';
}

function goToResultsPage() {
    // Redirect to results page with query parameters
    const stats = encodeURIComponent(JSON.stringify(questionTypeStats));
    window.location.href = `results.html?correct=${correctAnswers}&stats=${stats}`;
}

function restartGame() {
    streak = 0;
    incorrectAnswers = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    questionTypeStats = {
        SV: { total: 0, correct: 0 },
        // general: { total: 0, correct: 0 },
        // geography: { total: 0, correct: 0 },
        // science: { total: 0, correct: 0 },
        // literature: { total: 0, correct: 0 }
    };
    shuffleQuestions();  // Shuffle the question order again on restart
    displayQuestion();
}

// Initialize the game
shuffleQuestions();  // Shuffle the questions before starting the game
displayQuestion();
