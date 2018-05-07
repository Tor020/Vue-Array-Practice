export default {
  data() {
    return {
      weaponsBase: {
        CrovelLight: 49,
        CrovelHeavy: 86,
        CrovelAlt: 15,
        KatanaLight: 68,
        KatanaHeavy: 90,
        KatanaAlt: 68,
        BoneLight: 80,
        BoneHeavy: 165,
        BoneAlt: 175,
        PulverizerLight: 70,
        PulverizerHeavy: 145,
        PulverizerAlt: 528,
        ZweiLight: 85,
        ZweiHeavy: 195,
        ZweiAlt: 63,
        VLAD: 30,
        EvisceratorPrimary: 480,
        EvisceratorStab: 90,
        EvisceratorChain: 29
      },
      weaponsMisc: {
        PELLETS: {
          VLAD: 7
        }
      }
    };
  },

  computed: {},

  methods: {
    runMethod() {
           const ಠ = this;
      let weapons = [
        'CrovelLight',
        'CrovelHeavy',
        'CrovelAlt',
        'KatanaLight',
        'KatanaHeavy',
        'KatanaAlt',
        'BoneLight',
        'BoneHeavy',
        'BoneAlt',
        'PulverizerLight',
        'PulverizerHeavy',
        'PulverizerAlt',
        'ZweiLight',
        'ZweiHeavy',
        'ZweiAlt',
        'VLAD',
        'EvisceratorPrimary',
        'EvisceratorStab',
        'EvisceratorChain'
      ];

      let reH = /(Heavy)/g;
      let reL = /(Light)/g;

      let other = weapons.filter(i => {
        if (reH.test(i) === false) return i;
      });

      let heavy = weapons.filter(i => {
        if (reH.test(i) === true) 
          return i;
        
      });

    console.log(heavy, other);

    heavy = heavy.map(weapon => ({weapon, result: ಠ.mathCompose(ಠ.weaponsBase[weapon], ಠ.plvl)} ))
   .reduce((accumulator, i) => {
     accumulator[i.weapon] = i.result;
     return accumulator;
   }, {})
  console.log(heavy);
  
    },
},
    created() {
      console.log(this.runMethod());

    }

  }