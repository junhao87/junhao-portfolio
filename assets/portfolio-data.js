/* CONTENT FILE — You can send your updated text to ChatGPT and replace this file.
   Put photos/videos at the paths listed in README_中文_素材放置指南.md.
   Missing media display stylish placeholders instead of broken images. */
window.JH_CONTENT = {
  person: {
    name: 'Chong Jun Hao',
    email: 'junhaochong5@gmail.com',
    location: 'Johor Bahru, Malaysia',
    profilePhoto: 'assets/media/profile/profile.jpg'
  },
  projects: {
    batik: {
      slug: 'batik-studio',
      name: 'Batik Studio',
      kind: 'INDEPENDENT AI RESEARCH / CULTURAL TECHNOLOGY', year: '2026', number: '01',
      tagline: 'Where Malaysian Batik heritage meets generative AI and interactive 3D fashion.',
      summary: 'An independently built web application that combines two traditional Batik motifs using Poisson Image Blending and Stable Diffusion Img2Img, then lets users recolor patterns, apply them to 3D garments, learn about Batik culture, and save designs for reuse.',
      challenge: 'Traditional Batik creation depends on specialist craftsmanship, while typical design tools seldom connect motif generation, interactive garment previews, and accessible cultural learning in one place.',
      approach: 'Developed and evaluated five generative workflows before selecting a Poisson blending and Stable Diffusion 1.5 Img2Img pipeline. Connected generation, color adjustment, Three.js garment previews, a multilingual knowledge assistant, and local design history.',
      contribution: 'Sole Developer & Researcher. Personally led research, interface and AI pipeline development, Three.js implementation, multilingual cultural assistant, evaluation, documentation, and research presentation.',
      result: 'DIGITEX 2026 Gold Award and DEIC 2026 oral research presentation. In a 58-person user preference study, 94.8% gave the motif aesthetic quality the highest rating of 5/5.',
      process: [
        ['01', 'Research & benchmarking', 'Studied cultural symbolism and compared five AI generation approaches.'],
        ['02', 'End-to-end implementation', 'Built Poisson + Img2Img generation, HSL recoloring, Three.js garment texturing, and the Batik Kon assistant.'],
        ['03', 'Evaluation & presentation', 'Matched local and Colab inference settings, gathered feedback from 58 participants, and presented the results.']
      ],
      tags: ['Stable Diffusion 1.5', 'Poisson Image Blending', 'Three.js', 'PyTorch', 'WebGL', 'Multilingual i18n', 'IndexedDB'],
      note: '58-participant survey figures describe participant preferences, not model accuracy. The full technical research is documented in the project paper.',
      media: {cover:'assets/media/batik/cover.jpg', screen1:'assets/media/batik/platform-overview.jpg', screen2:'assets/media/batik/ai-pattern-01.jpg', video:'assets/media/batik/demo.mp4'}
    },
    sccci: {
      slug: 'sccci-ai-theatre',
      name: 'SCCCI AI Theatre',
      kind: 'REAL CLIENT PROJECT / AI CHATBOT', year: '2026', number: '02',
      tagline: 'Making 120 years of history conversational.',
      summary: 'Developed an AI-powered bilingual knowledge assistant using a hybrid FAQ and RAG workflow as part of SCCCI’s 120th anniversary interactive experience.',
      challenge: 'Provide visitors with institution-specific SCCCI information grounded in curated source materials, rather than relying on a general-purpose chatbot alone.',
      approach: 'Built a FastAPI chatbot component with structured bilingual FAQs, ChromaDB retrieval, document ingestion, OpenAI models, and a web-based testing interface.',
      contribution: 'Junior Programmer Intern at Digital Magic Studio. Responsible for the AI chatbot backend, hybrid FAQ and RAG knowledge retrieval, bilingual response refinement, testing, and documentation support within the project team.',
      result: 'The AI chatbot component was incorporated into the SCCCI 120th anniversary commemorative interactive experience in 2026. The development version includes 50 FAQ entries across English and Chinese.',
      process: [
        ['01', 'Curate knowledge', 'Prepare SCCCI history, organizational documents and 25 English plus 25 Chinese FAQ entries.'],
        ['02', 'Engineer retrieval', 'Implement FastAPI, FAQ matching, semantic retrieval through ChromaDB, and context-grounded generation.'],
        ['03', 'Test and integrate', 'Refine bilingual responses, source inspection, and client-oriented integration deliverables.']
      ],
      tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'OpenAI', 'Bilingual NLP', 'FAQ Engine'],
      note: 'This case study credits only the chatbot component I developed within the wider Digital Magic Studio production team. Client-sensitive materials are not included.',
      media: {cover:'assets/media/sccci/event-panorama.jpg',screen1:'assets/media/sccci/chatbot-interface.png',screen2:'assets/media/sccci/faq-testing.png',video:'assets/media/sccci/demo.mp4'}
    },
    nanao: {
      slug: 'nanao-ai-guide',
      name: 'MindScape Travel',
      kind: 'INTERNATIONAL COMPETITION / AI TOURISM', year: '2025–2026', number: '03',
      tagline: 'Where AI meets emotion-driven travel.',
      summary: 'An interdisciplinary Raffles University project combining a tourism application with AI-assisted sentiment analysis of travelers’ written reflections. The experience explores emotion-based journey mapping, personalized memories, and design-led visual storytelling.',
      challenge: 'Conventional tourism applications emphasize destinations and itineraries but often overlook how travelers feel and the memories they associate with places.',
      approach: 'Built web application interfaces and supporting backend flows with PHP, Python, HTML, CSS, JSON and SQL. Integrated feedback collection and AI-assisted sentiment processing while working with Graphic Design students on the creative direction.',
      contribution: 'Application Developer & AI Sentiment Analysis Developer. Responsible for implementation, user feedback processing, integration, debugging and technical demonstrations within a cross-disciplinary student team.',
      result: 'Nan’ao County 2025 Rural Operator Competition Second Prize; DIGITEX 2026 Silver Award; Indigo Design Award 2026 Silver Winner; Kancil Awards 2025 Merit; Times Young Creative Awards 2025 Second Prize (team recognition).',
      process: [
        ['01','Application prototype','Developed the web application and integrated user input with backend data processing.'],
        ['02','Sentiment analysis','Worked on AI-assisted interpretation of written reflections; the project documentation describes a six-category emotion pipeline.'],
        ['03','Creative collaboration','Connected the technical prototype to design concepts and prepared exhibition and competition demonstrations.']
      ],
      tags:['PHP','Python','SQL','NLP','Sentiment Analysis','Emotion Classification','UI Implementation','Team Collaboration'],
      note:'BERT tokenization and Softmax belong to the documented project pipeline. The Memory Canvas, AI artwork and souvenir extensions are presented as experience and future concepts, not fully validated production features.',
      media:{cover:'assets/media/nanao/cover.png',screen1:'assets/media/nanao/app-01.png',screen2:'assets/media/nanao/app-02.png',video:'assets/media/nanao/demo.mp4'}
    }
  }
};
