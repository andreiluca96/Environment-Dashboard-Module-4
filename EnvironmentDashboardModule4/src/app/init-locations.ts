export class Init{
  load(){
    if(localStorage.getItem('users') === null || localStorage.getItem('users') == undefined){
        console.log('No Users found ... Creating...');
        var users = [
          {
            text: 'Dan'
          },
          {
            text: 'Andrei'
          },
          {
            text: 'Ioana'
          },
          {
            text: 'Mihai'
          },
          {
            text: 'Nicolas'
          },
          {
            text: 'Andreea'
          },
          {
            text: 'Madalina'
          },
          {
            text: 'Victor'
          },
          {
            text: 'Mirela'
          },
          {
            text: 'Ionut'
          },
          {
            text: 'Paula'
          },
          {
            text: 'Paul'
          }
        ];
      localStorage.setItem('users', JSON.stringify(users));
      return
    } else  {
      console.log('Found Users...')
    }

    if(localStorage.getItem('locations') === null || localStorage.getItem('locations') == undefined){
        console.log('No Locations found ... Creating...');
        var locations = [
          {
            text: 'Iasi'
          },
          {
            text: 'Bucuresti'
          },
          {
            text: 'Oradea'
          },
          {
            text: 'Timisoara'
          },
          {
            text: 'Brasov'
          },
          {
            text: 'Cluj'
          },
          {
            text: 'Constanta'
          },
          {
            text: 'Galati'
          },
          {
            text: 'Botosani'
          },
          {
            text: 'Tulcea'
          },
          {
            text: 'Miercurea-Ciuc'
          },
          {
            text: 'Pitesti'
          }
        ];
        localStorage.setItem('locations', JSON.stringify(locations));
        return
      } else  {
        console.log('Found locations...')
      }
  }
}
