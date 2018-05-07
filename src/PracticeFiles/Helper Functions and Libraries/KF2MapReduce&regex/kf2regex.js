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
      const weapons = [
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

    // let reH = new RegExp("Heavy","g")
    // let reL = new RegExp("Light","g")

    let reH = /(Heavy)/g
    let reL = /(Light)/g



    let result = weapons.filter(i => {
      if (reH.test(i)) return i; })
      .map(i => i +="two")
        
     
      return result;
    },
},
    created() {
      console.log(this.runMethod());

    }

  }