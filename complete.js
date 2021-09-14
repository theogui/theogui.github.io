var body = document.body;

fetch('./data.json').then(res => res.json()).then(data => complete(data));


const create_profile = (profile) => {
    const about_card_title = document.createElement('h2');
    const about_card_text = document.createElement('p');
    const about_card = document.createElement('div');
    const contact_card_title = document.createElement('h2');
    const mail_icon = document.createElement('i');
    const mail = document.createElement('a');
    const contact_card_mail = document.createElement('li');
    const tel_icon = document.createElement('i');
    const tel = document.createElement('a');
    const contact_card_tel = document.createElement('li');
    const adress_icon = document.createElement('i');
    const adress = document.createElement('p');
    const contact_card_adress = document.createElement('li');
    const contact_card_list = document.createElement('ul');
    const contact_card = document.createElement('div');
    const box_title = document.createElement('h1');
    const box_content = document.createElement('div');
    const profile_img = document.createElement('img');
    const title = document.createElement('h1');
    const box_container = document.createElement('div');
    const box = document.createElement('div');

    about_card_title.textContent = "Qui suis-je ?";
    about_card_text.textContent = profile.about;
    about_card.classList.add('card');
    about_card.setAttribute('id', 'about')
    contact_card_title.textContent = "Contact";
    adress_icon.classList.add('fa');
    adress_icon.classList.add('fa-map-marker-alt');
    adress.textContent = profile.contact.address;
    contact_card_adress.classList.add('contact__list--item');
    tel_icon.classList.add('fa');
    tel_icon.classList.add('fa-phone');
    tel.textContent = profile.contact.tel;
    tel.href = "tel:" + profile.contact.tel;
    contact_card_tel.classList.add('contact__list--item');
    mail_icon.classList.add('fas');
    mail_icon.classList.add('fa-envelope');
    mail.textContent = profile.contact.mail;
    mail.href = "mailto: " + profile.contact.mail;
    contact_card_mail.classList.add('contact__list--item');
    contact_card_list.classList.add('contact__list');
    contact_card.classList.add('card');
    contact_card.setAttribute('id', 'contact')
    box_title.textContent = "Présentation";
    box_content.classList.add('box__content');
    profile_img.src = "photo.jpg";
    profile_img.alt = "Photo de Profil";
    profile_img.style.width = '11%';
    profile_img.classList.add('profile');
    title.textContent = "Bonjour et bienvenue sur mon CV";
    box_container.classList.add('box__container');
    box.classList.add('box');
    box.setAttribute('id', 'pres');

    about_card.appendChild(about_card_title);
    about_card.appendChild(about_card_text);
    box_content.appendChild(about_card);
    contact_card.appendChild(contact_card_title);
    contact_card_mail.appendChild(mail_icon);
    contact_card_mail.appendChild(mail);
    contact_card_list.appendChild(contact_card_mail);
    contact_card_tel.appendChild(tel_icon);
    contact_card_tel.appendChild(tel);
    contact_card_list.appendChild(contact_card_tel);
    contact_card_adress.appendChild(adress_icon);
    contact_card_adress.appendChild(adress);
    contact_card_list.appendChild(contact_card_adress);
    contact_card.appendChild(contact_card_list);
    box_content.appendChild(contact_card);
    box_container.appendChild(box_title);
    box_container.appendChild(box_content);
    box.appendChild(profile_img);
    box.appendChild(title);
    box.appendChild(box_container);
    return box
};

const add_schools = (education) => {
    const schools = document.createElement('ul');
    for (let i = 0; i < education.length; i++) {
        const school_info = education[i];

                const school_name = document.createElement('span');
                const school_city = document.createElement('span');
                const date = document.createElement('span');
                const description = document.createElement('p');
            const school_container = document.createElement('div');
        const school = document.createElement('li');

                school_name.classList.add('school_name');
                school_name.textContent = school_info.name;
                school_city.classList.add('school_city');
                school_city.textContent = ", " + school_info.adress
                date.classList.add('date');
                date.textContent = school_info.dates;
                description.classList.add('description');
                description.textContent = school_info.description;
            school_container.classList.add('school__container');
        school.classList.add('school');

                school_container.appendChild(school_name);
                school_container.appendChild(school_city);
                school_container.appendChild(document.createElement('br'));
                school_container.appendChild(date);
                school_container.appendChild(description);
            school.appendChild(school_container);
        schools.appendChild(school);
    }
    return schools
}

const add_works = (jobs) => {
    const works = document.createElement('ul');
    for (i = 0; i < jobs.length; i++) {
        const info = jobs[i];

                const enterprise = document.createElement('span');
                const enterprise_city = document.createElement('span');
                const date = document.createElement('span');
                const job_title = document.createElement('span');
                const description = document.createElement('p');
            const work_container = document.createElement('div');
        const work = document.createElement('li');

                enterprise.classList.add('enterprise');
                enterprise.textContent = info.name;
                enterprise_city.classList.add('enterprise_city');
                enterprise_city.textContent = ", " + info.adress;
                date.classList.add('date');
                date.textContent = info.dates;
                job_title.classList.add('job_title');
                job_title.textContent = " - " +  info.position;
                description.classList.add('description');
                description.textContent = info.description;
            work_container.classList.add('work__container');
        work.classList.add('work');

                work_container.appendChild(enterprise);
                work_container.appendChild(enterprise_city);
                work_container.appendChild(document.createElement('br'));
                work_container.appendChild(date);
                work_container.appendChild(job_title);
                work_container.appendChild(description);
            work.appendChild(work_container);
        works.appendChild(work);
    }
    return works;
}

const add_assos = (assos) => {
    const works = document.createElement('ul');
    for (i = 0; i < assos.length; i++) {
        const info = assos[i];

                const enterprise = document.createElement('span');
                const enterprise_city = document.createElement('span');
                const date = document.createElement('span');
                const job_title = document.createElement('span');
                const description = document.createElement('p');
            const work_container = document.createElement('div');
        const work = document.createElement('li');

                enterprise.classList.add('enterprise');
                enterprise.textContent = info.name;
                enterprise_city.classList.add('enterprise_city');
                enterprise_city.textContent = ", " + info.adress;
                date.classList.add('date');
                date.textContent = info.dates;
                job_title.classList.add('job_title');
                job_title.textContent = " - " +  info.position;
                description.classList.add('description');
                description.textContent = info.description;
            work_container.classList.add('work__container');
        work.classList.add('work');

                work_container.appendChild(enterprise);
                work_container.appendChild(enterprise_city);
                work_container.appendChild(document.createElement('br'));
                work_container.appendChild(date);
                work_container.appendChild(job_title);
                work_container.appendChild(description);
            work.appendChild(work_container);
        works.appendChild(work);
    }
    return works;
}

const create_exp = (experiences) => {
    const educ = experiences.education;
    const jobs = experiences.work;
    const asso = experiences.associations;
    if (educ.length || jobs.length || asso.length) {
                const title = document.createElement('h1');
                        const schools_title = document.createElement('h2');
                        var schools_list;
                    const schools_card = document.createElement('div');
                        const works_title = document.createElement('h2');
                        var works_list;
                    const works_card = document.createElement('div');
                        const assos_title = document.createElement('h2');
                        var assos_list;
                    const assos_card = document.createElement('div');
                const box_content = document.createElement('div');
            const box_container = document.createElement('div');
        const box = document.createElement('div');

                title.textContent = "Expériences";
                    if (educ.length) {
                            schools_title.textContent = "Formations";
                            schools_list = add_schools(educ);
                            schools_list.classList.add('school__list');
                        schools_card.classList.add('card');
                    }
                    if (jobs.length) {
                            works_title.textContent = "Emplois";
                            works_list =  add_works(jobs);
                            works_list.classList.add('work__list');
                        works_card.classList.add('card');
                    }
                    if (asso.length) {
                            assos_title.textContent = "Vie associative";
                            assos_list =  add_assos(asso);
                            assos_list.classList.add('asso__list');
                        assos_card.classList.add('card');
                    }
                box_content.classList.add('box__content');
            box_container.classList.add('box__container');
        box.classList.add('box');
        box.setAttribute('id', 'exp');

                box_container.appendChild(title);
                    if (educ.length) {
                            schools_card.appendChild(schools_title);
                            schools_card.appendChild(schools_list);
                        box_content.appendChild(schools_card);
                    }
                    if (jobs.length) {
                            works_card.appendChild(works_title);
                            works_card.appendChild(works_list);
                        box_content.appendChild(works_card);
                    }
                    if (asso.length) {
                            assos_card.appendChild(assos_title);
                            assos_card.appendChild(assos_list);
                        box_content.appendChild(assos_card);
                    }
                box_container.appendChild(box_content);
            box.appendChild(box_container);
        return box
    }
    return null
}

const add_skills = (list) => {
    const skills = document.createElement('ul');
    for (let i = 0; i < list.length; i++) {
        const elem = list[i];
        const li = document.createElement('li');
        li.innerText = elem;
        skills.appendChild(li);
    }
    return skills;
}

const create_skills = (skills) => {
    const lang = skills.language;
    const prgm_lang = skills.programming_language;
    if (lang.length || prgm_lang.length) {
                const title = document.createElement('h1');
                        const prgm_lang_title = document.createElement('h2');
                        let prgm_lang_list;
                    const prgm_lang_card = document.createElement('div');
                        const lang_title = document.createElement('h2');
                        let lang_list;
                    const lang_card = document.createElement('div');
                const content = document.createElement('div');
            const container = document.createElement('div');
        const box = document.createElement('div');

                title.textContent = "Compétences";
                    if (prgm_lang.length) {
                            prgm_lang_title.textContent = "Langages de Programmation";
                            prgm_lang_list = add_skills(prgm_lang);
                            prgm_lang_list.classList.add('coding');
                        prgm_lang_card.classList.add('card');
                        prgm_lang_card.setAttribute('id', 'coding__skill')
                    }
                    if (lang.length) {
                            lang_title.textContent = "Langues"
                            lang_list = add_skills(lang);
                            lang_list.classList.add('language');
                        lang_card.classList.add('card');
                        lang_card.setAttribute('id', 'language__skill')
                    }
                content.classList.add('box__content');
            container.classList.add('box__container');
        box.classList.add('box');
        box.setAttribute('id', 'skills');

                container.appendChild(title);
                    if (prgm_lang.length) {
                            prgm_lang_card.appendChild(prgm_lang_title);
                            prgm_lang_card.appendChild(prgm_lang_list);
                        content.appendChild(prgm_lang_card);
                    }
                    if (lang.length) {
                            lang_card.appendChild(lang_title);
                            lang_card.appendChild(lang_list);
                        content.appendChild(lang_card);
                    }
                container.appendChild(content);
            box.appendChild(container);
        return box;
    }
    return null;
}

const complete = (json) => {
    const profile_box = create_profile(json.profile);
    const experience_box = create_exp(json.experiences);
    const skills_box = create_skills(json.skills);
    body.appendChild(profile_box);
    if (experience_box) {
        body.appendChild(experience_box);
    }
    if (skills_box) {
        body.appendChild(skills_box)
    }
};
