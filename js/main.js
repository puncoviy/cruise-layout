const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

const settingsBtn = document.querySelector('.header__settings-icon');
const settingsList = document.querySelector('.header__pannel');
// const settingsLink = document.querySelectorAll('.header__settings-link');



burgerBtn.addEventListener('click', function(){
    settingsBtn.classList.remove('active');
    settingsList.classList.remove('active');
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
        }
    })
})

settingsBtn.addEventListener('click', function(){
    burgerIcon.classList.remove('active');
    menuList.classList.remove('active');
    settingsList.classList.toggle('active');
    settingsBtn.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            settingsList.classList.remove('active');
        }
    })
})

// settingsLink.forEach(function(link){
// 	link.addEventListener('click', function(e) {
//         e.preventDefault();
// 		settingsLink.forEach(function(link) {
// 			link.classList.remove('main')
// 		});
// 		link.classList.add('main');
//         meetup.textContent = link.textContent + ' 10-21 мая';
//         document.title = 'CustDev | ' + link.textContent;
// 	})
// })

console.log(`Выполнено:
адаптивное меню, закрытие при скролле;
настройки, закрытие при скролле;

Дополнить:
закрытие меню при клике за его пределами без создания дополнительной оболочки;
смена языка;
смена валюты;
попап для фотографий`)