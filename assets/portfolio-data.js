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
      kind: 'CLIENT PROJECT / INTERACTIVE AI', year: '2026', number: '02',
      tagline: 'History and storytelling become a conversation.',
      summary: 'A client-facing AI interactive experience supporting the Singapore Chinese Chamber of Commerce & Industry programme.',
      challenge: 'Translate business history and reference material into an engaging, reliable AI interaction for visitors.',
      approach: 'Structure AI response flows, organise content, test user interactions and refine the experience around client expectations.',
      contribution: 'Supported response flow design, user interaction logic, content refinement, testing and delivery materials within the project team.',
      result: 'Hands-on experience contributing to a live client project; visual evidence and specific technical results will be added when supplied and approved for public use.',
      process: [
        ['01', 'Understand content', 'Review reference material and the desired visitor experience.'],
        ['02', 'Develop interactions', 'Support AI response structure, conversation flow and testing.'],
        ['03', 'Refine for delivery', 'Improve behaviour based on tests and client feedback.']
      ],
      tags: ['Conversational AI','Interaction Logic','Testing','Client Collaboration'],
      note: 'Only share client-approved screenshots, datasets and videos.',
      media: {cover:'assets/media/sccci/cover.jpg',screen1:'assets/media/sccci/01.jpg',screen2:'assets/media/sccci/02.jpg',video:'assets/media/sccci/demo.mp4'}
    },
    nanao: {
      slug: 'nanao-ai-guide',
      name: 'Nan’ao AI Travel Guide',
      kind: 'AI TOURISM / EXPERIENCE DESIGN',year:'2025',number:'03',
      tagline: 'Exploring a destination through emotion and discovery.',
      summary: 'An emotional AI tourism concept designed to connect culture, travel recommendations and guided storytelling.',
      challenge: 'Make regional tourism discovery feel more personal and expressive than a conventional destination guide.',
      approach: 'Build a journey around mood, cultural context, recommendations and guided narrative interactions.',
      contribution: 'Contributed to the experience concept, visitor journey, emotional interaction flow and AI-guided storytelling direction.',
      result: 'Second Prize in the Rural Cultural and Creative Track at the 2025 Nan’ao County Rural Operator Competition in China.',
      process: [
        ['01','Discover the audience','Frame the destination experience and traveller journey.'],
        ['02','Design the journey','Connect preferences and cultural stories to the proposed guide.'],
        ['03','Communicate the vision','Present the concept and user experience for competition.']
      ],
      tags:['AI Experience','Travel Recommendations','UX Strategy','Storytelling'],
      note:'Awaiting original visual assets and more detailed project materials.',
      media:{cover:'assets/media/nanao/cover.jpg',screen1:'assets/media/nanao/01.jpg',screen2:'assets/media/nanao/02.jpg',video:'assets/media/nanao/demo.mp4'}
    }
  }
};
