// example 1 
    function calc(functionToPass) {
      const _ =  this.weaponsBase;   // prefix referencing base weapon damage

      const weapons = [
        'Winc',
        'SPX4',
        'Cros',
        'M14E',
        'Rail',
        'R185',
        'M500',
        'Spit'
      ];
      return weapons
        .map(weapon => ({ weapon, res: functionToPass(this.weaponsBase[weapon]) }))             //the passed function has its operation performed on each item in the list via map.
        .reduce((accumulator, i) => {                                               // reduce then transforms the array into an object and matches each item to the example data inside weaponsBase and returns the object
          accumulator[i.weapon] = i.res;
          return accumulator;
        }, {});
    }
  // This is the helper function that gets passed into calc()
    function mathCompose(weaponBase, plvl) {
      function multiply(a, b) {
          return a * b;
        }

      // Shorthand reference key
      const __ = this;                //  prefix referencing this

      let sniper = __.Sniper ?       multiply(weaponBase, 0.25) : 0;           // Check for Sniper Perk
      let stability = __.Stability ? multiply(weaponBase, 0.3) : 0;            // Check for Stability Perk
      let rackem = __.Rackem ?       multiply(weaponBase, __.rkVal) : 0;       // Check for Rackem Perk
      let deadeye = __.Deadeye ?     multiply(weaponBase, 0.1) : 0;            // Check for Deadeye Perk
      
      let standardCalc = multiply(weaponBase, this.plvl) 
      return Math.ceil(weaponBase + standardCalc + sniper + stability + rackem + deadeye);  
    }

    /*  Reference data used in these functions originally.

    EXAMPLE 1 Data
      weaponsBase: {
        Winc: 80,
        SPX4: 180,
        Cros: 350,
        M14E: 90,
        Rail: 750,
        R185: 50,
        M500: 160,
        Spit: 40
      }

  Example 2 Data

    weaponsBase: {
        LMGs: 30,
        AR15: 30,
        Bull: 30,
        M16m: 30,
        AK12: 40,
        HMTe: 40,
        Scar: 55
      }

    */


// Example 2
      function weaponsCalc() {
      // Shorthand reference key
      const _ = this.weaponsBase; // prefix referencing base weapon damage
      const _$ = this.plvl; // short handle for this.plvl

      // Math Operations
      const m1 = this.mathBasic; // math operation no perks
      const m2 = this.mathHPR; // math operation for HollowPoint selection

      function calc(mathFunc) {
        const weapons = [
          'LMGs',
          'AR15',
          'Bull',
          'M16m',
          'AK12',
          'HMTe',
          'Scar'
        ];

        return weapons
          .map(weapon => ({ weapon, result: mathFunc(_[weapon], _$) }))
          .reduce((accumulator, i) => {
            accumulator[i.weapon] = i.result;
            return accumulator;
          }, {});
      }
      return !this.hollowPointRounds ? calc(m1) : calc(m2);
    }



