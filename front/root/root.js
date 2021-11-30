class Screen{
    constructor(){

        this.options = 2; 
        this.menu = this.assemble_menu();
        console.log(this.menu)
        this.classlist = "Menu";
        this.content = document.createElement('div')
        this.content.id = 'content-box';
        document.body.appendChild(this.content);
        this.open_eventos();


    }
    assemble_menu(){        

        const divMenu = document.createElement('div');
        divMenu.id = 'divMenu';
        //paths
        const login = document.createElement('a');
        const home = document.createElement('a');
        const eventos = document.createElement('a');
        const simulação = document.createElement('a');
        login.id = 'login';
        login.innerText = 'Login'
        home.id = 'home';
        home.innerText = 'Home';
        eventos.id = 'eventos';
        eventos.innerText = 'Eventos';
        eventos.onclick = ()=>{
            document.getElementById('eventosDiv').style.left = '0%'
        }
        simulação.id = 'simulação';
        simulação.innerText = 'Simulação';
        simulação.href = '../entrada/entrada.html';
        
        [divMenu,login,home,eventos,simulação].forEach(function(element){ element.className = 'Menu'})

        document.body.appendChild(divMenu);
        divMenu.appendChild(login);
        divMenu.appendChild(home);
        divMenu.appendChild(eventos);
        divMenu.appendChild(simulação);

        return {menu:divMenu,options:{login,home,eventos,simulação}}

    }
    open_eventos(){
        const eventosDiv = document.createElement('div');
        
        eventosDiv.id = 'eventosDiv';
        this.content.appendChild(eventosDiv);

        const calendar = document.createElement('table');
        const m = document.createElement('thead');
        const w = document.createElement('tr');
        w.style.height = '35px';
        w.style.width = '700px';
        const d = document.createElement('tr');
        d.style.height = 'xx';
        d.style.width = '100%';

        m.innerText = 'DEZEMBRO'
        calendar.classList = 'calendar';

        eventosDiv.appendChild(calendar);
        calendar.appendChild(m);
        calendar.appendChild(w);
        calendar.appendChild(d);
        let days = ['D','S','T','Q','Q','S','S']

        for(let i=0;i<7;i++){
            const wd = document.createElement('td');
            w.appendChild(wd);
            wd.innerText = days[i];
            wd.style.border = 'transparent'
            wd.style.height = '35px';
            wd.style.width = '35px';
        }

        for(let i=0;i<35;i++){
            const dc = document.createElement('td');
            d.appendChild(dc);
            dc.id = `december${i-2}`;
            dc.style.boxShadow = '1px 1px 5px rgb(1, 1, 1)'
            if(i<3||i>33) dc.style.visibility = 'hidden';
            else dc.innerText = i-2
        }


    }
}
const x = new Screen;
