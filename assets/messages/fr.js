window.wajug = window.wajug || {};
window.wajug.messages = window.wajug.messages || {}


var properties = {};
properties["index.menu.home"] = "Accueil";
properties["index.menu.events"] = "Événements";

properties["index.menu.lgg"] = "Choisissez votre langue";

properties["index.content.moto"] = 'WAJUG est votre groupe d\'utilisateurs local, Wallon, abordant "tout ce qui touche au développement".<br />Tout ceci dans une ambiance fun, amicale, ouverte et typiquement wallone.';

properties["index.jargons.header"] = 'Jargons';
properties["index.jargons.title"] = 'Venez nous rejoindre pour discuter des langages de programmation de toutes sortes, tels que:';
properties["index.jargons.list"] = '<li>Java</li><li>.Net</li><li>Groovy</li><li>Scala</li><li>JavaScript</li><li>PHP</li>';

properties["index.agile.header"] = 'Agile';
properties["index.agile.title"] = 'Améliorer vos connaissances sur les méthodologies <em>Agile</em>, et mettez vos talents en pratique le plus efficacement possible.';
properties["index.agile.list"] = '<li>Scrum</li><li>Lean</li><li>Kanban</li><li>...</li>';

properties["index.platforms.header"] = 'Plateformes';
properties["index.platforms.title"] = '';
properties["index.platforms.list"] = '<li>Cloud computing, IAAS, PAAS, SAAS</li><li>GAE, Amazon, ...</li>';

properties["index.tooling.header"] = 'Outillage';
properties["index.tooling.title"] = 'A quoi servent ces outils, comment les intégrer, pourquoi les utiliser?';
properties["index.tooling.list"] = '<li>Systèmes de version de code source (Git, Mercurial, Subversion)</li><li>Intégration Continue (Jenkins, etc.)</li><li>...</li>';

properties["index.yourstuff.header"] = 'C\'est à vous';
properties["index.yourstuff.content"] = '<p>Mais WAJUG est bien plus que tout ceci.<br />C\'est <b>votre</b> groupe d\'utilisateurs, dédié à <b>vos</b> centres d\'interets.Donc n\'hésitez pas à envoyer vos suggestions sur la page<a href="https://www.facebook.com/pages/WaJug/365099796891111">Facebook de WAJUG</a> et/ou sur <a href="http://twitter.com/wajug">Twitter</a>.</p><p>De même, si vous avez envie de présenter un sujet, <i>soyez les bienvenus et faites le nous savoir.</i></p>';

properties["index.gather.header"] = 'Interessé? Génial! Voici ce que vous pouvez faire:';
properties["index.gather.content"] = '<li>Venez à nos prochaines sessions. Le programme sera annoncé dès que nous aurons suffisement de monde.</li><li>Suivez-nous sur <a href="http://twitter.com/wajug">Twitter</a> et sur<a href="https://www.facebook.com/pages/WaJug/365099796891111">Facebook</a>.</li><li>Faites passer le message, parlez de WAJUG à vos amis et à vos collègues.</li><li>Et si vous êtes pret à aider, nous recherchons des sponsors/partenaires,ainsi que des salles de réunions sur Liège et alentours.</li>';

properties["index.sponsors.title"] = 'Nos Sponsors';



properties["sponsors.nextlab.description"] = 'NextLab est ...';
properties["sponsors.nextlab.link"] = '<a href="http://nextlab.be">NextLab</a>';
properties["sponsors.arexo.description"] = 'Arexo est ...';
properties["sponsors.arexo.link"] = '<a href="http://arexo.be">Arexo</a>';



properties["events.title"] = 'Prochaines Sessions';
properties["events.subtitle"] = 'Voici l\'agenda de nos prochaines sessions.<br />Revennez régulièrement pour des mises à jour.';
properties["events.table.header.date"] = 'Date';
properties["events.table.header.subject"] = 'Sujet';
properties["events.table.header.speaker"] = 'Présentateur';
properties["events.table.header.location"] = 'Lieu';
properties["events.table.content[0].date"] = '17/01/2013';
properties["events.table.content[0].subject"] = 'Introduction à la programmation fonctionelle au travers de Scala';
properties["events.table.content[0].speaker"] = 'Andy Petrella';
properties["events.table.content[0].location"] = 'TBA';
properties["events.button.details"] = 'Détails';
properties["events.table.content[1].date"] = '27/02/2013';
properties["events.table.content[1].subject"] = 'Agile distribué en équipe offshores: retour d\'expérience';
properties["events.table.content[1].speaker"] = 'Stephane Rondal';
properties["events.table.content[1].location"] = 'TBA';
properties["events.stay.tuned"] = 'Restez branché, d\'autres sessions sont encore à venir...';


properties["events.book"] = 'Réservez';
properties["events.where_when"] = 'Où & Quand';


properties["events.apetrella.about.header"] = 'À propos d\'Andy';
properties["events.apetrella.about.content"] = '<p>Avant mon mariage et un super gosse (mes plus grandes fiertés), j\'ai étudié les Mathématiques à l\'Univeristé de Liège, directement suivi par une autre licence en Informatique.</p> <p>Après mon devoir scolaire, j\'ai principalement travaillé dans le monde SIG (GIS), ou j\'ai eu l\'occasion de participer à des projets géniaux avec des parties prenantes telles que OTAN ou encore l\'ESA -- pendant lesquels je me suis bien amusé avec du Java, Python, AS3, JavaScript et autres broles du style.</p> <p>Et maintenant, dans la société NextLab que j\'ai cofondé... je me poile en hackant du Scala et de la programmation fonctionnelle en général... Pour le web, je le fais à travers la lentille Play! Framework 2. Ah oui, je suis aussi en train d\'écrire un bouquin... sur Play! Framework 2.</p>';

properties["events.apetrella.scala.title"] = 'Introduction à la programmation fonctionelle au travers de Scala.';
properties["events.apetrella.scala.subtitle"] = 'Pourquoi ce buzz... en dehors des amphis ?';
properties["events.apetrella.scala.synopsis"] = '<p>Dans cette présentation, nous allons survoler les concepts fondamentaux de la programmation fonctionnelle, les expressions, immutabilité et consors. A des fins d\'illustrations, nous programmerons cela en live en utilisant Scala.</p> <p>Grâce à cette petite introduction, nous aurons déjà assez d\'informations pour saisir les subtilités garantissant cette qualité dans le monde de la programmation concurrente -- pièce maîtresse de toute application cloud. Une des libraries les plus populaires prenant avantages de ces fonctionnalités glonflées en matière de concurrence est Akka.</p> <p>Mets tout ça dans un serveur web et tu obtiens un genre de Nirvana non-bloquant et hautement réactif -- optimisant la consommation des ressources et capable de monter en charge. En toute logique avec ce qui précède, un démonstration du Play! Framework 2 s\'impose.</p>';
properties["events.apetrella.scala.where_when"] = '<p>Jeudi 17 janvier 2013<br> Liège ou aux alentours, l\'emplacement exact vous sera communiqué ultérieurement.<br> <i>Nous sommes toujours à la recherche d\'une salle de réunion. Si vous souhaitez nous accueillir au sein de votre entreprise, n\'hésitez pas à nous contacter: <a rel="nofollow" target="_blank">info@wajug.be</a></i> </p>';


properties["events.srondal.about.header"] = 'À propos de Stephane';
properties["events.srondal.about.content"] = '<p>When he\'s not busy with his family, traveling, or toying around with geeky stuff,Stephane Rondal is an avid Agilist. He has been learning, applying and teaching Agile since 2005,on solo projects up to projects involving highly distributed teams.</p><p>Stephane is a frequent trainer on Agile matters, as well as a Java/Java EE architect.He\'s also the co-founder of Arexo, a Belgian IT consultancy company.</p>';

properties["events.srondal.agile_distributed.title"] = 'Agile distribué en équipes offshores: retour d\'expérience';
properties["events.srondal.agile_distributed.subtitle"] = '';
properties["events.srondal.agile_distributed.synopsis"] = 'Les détails de cette présentation sont en cours d\'élaboration, ils seront publiés prochainement.';
properties["events.srondal.agile_distributed.where_when"] = '<p>Mercredi 27 février 2013<br>Liège ou aux alentours, l\'emplacement exact vous sera communiqué ultérieurement.<br><i>Nous sommes toujours à la recherche d\'une salle de réunion. Si vous souhaitez nous accueillir au sein de votre entreprise, n\'hésitez pas à nous contacter: <a rel="nofollow" target="_blank">info@wajug.be</a></i></p>';


properties["index.footer.copy"] = "© WAJUG 2012. Tous droits réservés";


$(properties).messages(window.wajug.messages, "fr");