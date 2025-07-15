import { basePath } from '../next.config.js';

const carData = [
  {
    name: '루센트',
    name2: 'Lucent',
    image: basePath + '/cars/chatgpt_01.png',
    backgroundColor: '#ffffffff',
    description: 'A sleek and modern sedan perfect for city driving.',
    specs: [
      { label: '전장', value: '4,850 mm' },
      { label: '전폭', value: '1,850 mm' },
      { label: '전고', value: '1,450 mm' },
      { label: '축거', value: '2,850 mm' },
      { label: '엔진', value: '2.0L 가솔린 터보' },
      { label: '출력', value: '250마력' },
      { label: '변속기', value: '8단 자동' },
      { label: '구동방식', value: '전륜구동' },
      { label: '연비', value: '12.5 km/L' },
      { label: '가격', value: '₩35,000,000' },
    ],
    trims: [
      { 
        name: '베이직', 
        price: '₩35,000,000', 
        image: basePath + '/cars/trim/sedan_basic.png',
        options: [
          { label: '시트', value: '직물 시트' },
          { label: '오디오 시스템', value: '기본 4스피커' },
          { label: '네비게이션', value: '네이게이션 없음' },
          { label: '휠', value: '16인치 스틸 휠' },
        ],
      },
      { 
        name: '프리미엄', 
        price: '₩40,000,000',
        image: basePath + '/cars/trim/sedan_premium.png',
        options: [
          { label: '시트', value: '가죽 시트' },
          { label: '오디오 시스템', value: '8스피커' },
          { label: '네비게이션', value: '네비게이션 장착' },
          { label: '휠', value: '17인치 알로이 휠' },
        ]
      },
      { 
        name: '럭셔리', 
        price: '₩45,000,000',
        image: basePath + '/cars/trim/sedan_luxury.png',
        options: [
          { label: '시트', value: '프리미엄 가죽 시트' },
          { label: '오디오 시스템', value: '12스피커 Bose' },
          { label: '네비게이션', value: '프리미엄 네비 장착' },
          { label: '휠', value: '18인치 알로이 휠' },
        ]
      },
    ],
  },
  {
    name: '레비온',
    name2: 'Revion',
    image: basePath + '/cars/chatgpt_02.png',
    backgroundColor: '#e2effdff',
    description: 'A powerful SUV built for adventure.',
    specs: [
      { label: '전장', value: '4,850 mm' },
      { label: '전폭', value: '1,850 mm' },
      { label: '전고', value: '1,450 mm' },
      { label: '축거', value: '2,850 mm' },
      { label: '엔진', value: '2.0L 가솔린 터보' },
      { label: '출력', value: '250마력' },
      { label: '변속기', value: '8단 자동' },
      { label: '구동방식', value: '전륜구동' },
      { label: '연비', value: '12.5 km/L' },
      { label: '가격', value: '₩35,000,000' },
    ],
    trims: [
      { 
        name: 'Basic', 
        price: '₩35,000,000', 
        image: basePath + '/cars/trim/sedan_basic.png',
        options: [
          { label: '시트', value: '직물 시트' },
          { label: '오디오 시스템', value: '기본 4스피커' },
          { label: '네비게이션', value: '네비게이션 없음' },
          { label: '휠', value: '16인치 스틸 휠' },
        ],
      },
      { 
        name: 'Premium', 
        price: '₩40,000,000',
        image: basePath + '/cars/trim/sedan_premium.png',
        options: [
          { label: '시트', value: '가죽 시트' },
          { label: '오디오 시스템', value: '8스피커' },
          { label: '네비게이션', value: '네비게이션 장착' },
          { label: '휠', value: '17인치 알로이 휠' },
        ]
      },
      { 
        name: 'Luxury', 
        price: '₩45,000,000',
        image: basePath + '/cars/trim/sedan_luxury.png',
        options: [
          { label: '시트', value: '프리미엄 가죽 시트' },
          { label: '오디오 시스템', value: '12스피커 Bose' },
          { label: '네비게이션', value: '프리미엄 네비장착' },
          { label: '휠', value: '18인치 알로이 휠' },
        ]
      },
    ],
  },
  {
    name: '아마레',
    name2: 'Amare',
    image: basePath + '/cars/chatgpt_03.png',
    backgroundColor: '#ccccccff',
    description: 'A compact hatchback with excellent efficiency.',
    specs: [
      { label: '전장', value: '4,850 mm' },
      { label: '전폭', value: '1,850 mm' },
      { label: '전고', value: '1,450 mm' },
      { label: '축거', value: '2,850 mm' },
      { label: '엔진', value: '2.0L 가솔린 터보' },
      { label: '출력', value: '250마력' },
      { label: '변속기', value: '8단 자동' },
      { label: '구동방식', value: '전륜구동' },
      { label: '연비', value: '12.5 km/L' },
      { label: '가격', value: '₩35,000,000' },
    ],
    trims: [
      { 
        name: 'Basic', 
        price: '₩35,000,000', 
        image: basePath + '/cars/trim/sedan_basic.png',
        options: [
          { label: '시트', value: '직물 시트' },
          { label: '오디오 시스템', value: '기본 4스피커' },
          { label: '네비게이션', value: '네비게이션 없음' },
          { label: '휠', value: '16인치 스틸 휠' },
        ],
      },
      { 
        name: 'Premium', 
        price: '₩40,000,000',
        image: basePath + '/cars/trim/sedan_premium.png',
        options: [
          { label: '시트', value: '가죽 시트' },
          { label: '오디오 시스템', value: '8스피커' },
          { label: '네비게이션', value: '네비게이션 장착' },
          { label: '휠', value: '17인치 알로이 휠' },
        ]
      },
      { 
        name: 'Luxury', 
        price: '₩45,000,000',
        image: basePath + '/cars/trim/sedan_luxury.png',
        options: [
          { label: '시트', value: '프리미엄 가죽 시트' },
          { label: '오디오 시스템', value: '12스피커 Bose' },
          { label: '네비게이션', value: '프리미엄 네비 장착' },
          { label: '휠', value: '18인치 알로이 휠' },
        ]
      },
    ],
  },

  {
    name: '피코',
    name2: 'Pico',
    image: basePath + '/cars/chatgpt_04.png',
    backgroundColor: '#e7ffefff',
    description: 'A compact hatchback with excellent efficiency.',
    specs: [
      { label: '전장', value: '4,850 mm' },
      { label: '전폭', value: '1,850 mm' },
      { label: '전고', value: '1,450 mm' },
      { label: '축거', value: '2,850 mm' },
      { label: '엔진', value: '2.0L 가솔린 터보' },
      { label: '출력', value: '250마력' },
      { label: '변속기', value: '8단 자동' },
      { label: '구동방식', value: '전륜구동' },
      { label: '연비', value: '12.5 km/L' },
      { label: '가격', value: '₩35,000,000' },
    ],
    trims: [
      { 
        name: 'Basic', 
        price: '₩8,500,000', 
        image: basePath + '/cars/trim/sedan_basic.png',
        options: [
          { label: '시트', value: '직물 시트' },
          { label: '오디오 시스템', value: '기본 4스피커' },
          { label: '네비게이션', value: '네비게이션 없음' },
          { label: '휠', value: '16인치 스틸 휠' },
        ],
      },
      { 
        name: 'Premium', 
        price: '₩10,000,000',
        image: basePath + '/cars/trim/sedan_premium.png',
        options: [
          { label: '시트', value: '가죽 시트' },
          { label: '오디오 시스템', value: '8스피커' },
          { label: '네비게이션', value: '네비게이션 장착' },
          { label: '휠', value: '17인치 알로이 휠' },
        ]
      },
      { 
        name: 'Luxury', 
        price: '₩15,000,000',
        image: basePath + '/cars/trim/sedan_luxury.png',
        options: [
          { label: '시트', value: '프리미엄 가죽 시트' },
          { label: '오디오 시스템', value: '12스피커 Bose' },
          { label: '네비게이션', value: '프리미엄 네비 장착' },
          { label: '휠', value: '17인치 알로이 휠' },
        ]
      },
    ],
  },

  {
    name: '에크세도',
    name2: 'Excedo',
    image: basePath + '/cars/chatgpt_05.png',
    backgroundColor: '#eeeeeeff',
    description: 'A black sedan with excellent efficiency.',
    specs: [
      { label: '전장', value: '4,850 mm' },
      { label: '전폭', value: '1,850 mm' },
      { label: '전고', value: '1,450 mm' },
      { label: '축거', value: '2,850 mm' },
      { label: '엔진', value: '2.0L 가솔린 터보' },
      { label: '출력', value: '250마력' },
      { label: '변속기', value: '8단 자동' },
      { label: '구동방식', value: '전륜구동' },
      { label: '연비', value: '12.5 km/L' },
      { label: '가격', value: '₩35,000,000' },
    ],
    trims: [
      { 
        name: 'Basic', 
        price: '₩35,000,000', 
        image: basePath + '/cars/trim/sedan_basic.png',
        options: [
          { label: '시트', value: '직물 시트' },
          { label: '오디오 시스템', value: '기본 4스피커' },
          { label: '네비게이션', value: '네비게이션 장착' },
          { label: '휠', value: '16인치 스틸 휠' },
        ],
      },
      { 
        name: 'Premium', 
        price: '₩40,000,000',
        image: basePath + '/cars/trim/sedan_premium.png',
        options: [
          { label: '시트', value: '가죽 시트' },
          { label: '오디오 시스템', value: '8스피커' },
          { label: '네비게이션', value: '프리미엄 네비 장착' },
          { label: '휠', value: '17인치 알로이 휠' },
        ]
      },
      { 
        name: 'Luxury', 
        price: '₩45,000,000',
        image: basePath + '/cars/trim/sedan_luxury.png',
        options: [
          { label: '시트', value: '프리미엄 가죽 시트' },
          { label: '오디오 시스템', value: '12스피커 Bose' },
          { label: '네비게이션', value: '프리미엄 네비 장착' },
          { label: '휠', value: '18인치 알로이 휠' },
        ]
      },
    ],
  },
];

export default carData;