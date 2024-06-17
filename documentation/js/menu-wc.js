'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' : 'data-bs-target="#xs-controllers-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' :
                                            'id="xs-controllers-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' :
                                        'id="xs-injectables-links-module-AppModule-1b61fce183e4fe79fc0d29e61b2b0647f2cdcb64232165bd6476a8ff6b7834e075e64b12ce7c036ec56354ba0881ae9c41efe2a7b8df16c405ff3541938e8de5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' : 'data-bs-target="#xs-controllers-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' :
                                            'id="xs-controllers-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' }>
                                            <li class="link">
                                                <a href="controllers/FormController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' : 'data-bs-target="#xs-injectables-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' :
                                        'id="xs-injectables-links-module-FormModule-26304dcab39f4ecfa9dd6e818b8420873932b1dd1c7cf9f1165b0bf2bd58090139841ac4381f1763ceb94cf88f3bcc71287f2add531ae2ed11c91a6b8799c28f"' }>
                                        <li class="link">
                                            <a href="injectables/FormService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FormController.html" data-type="entity-link" >FormController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateFormDto.html" data-type="entity-link" >CreateFormDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Education.html" data-type="entity-link" >Education</a>
                            </li>
                            <li class="link">
                                <a href="classes/Form.html" data-type="entity-link" >Form</a>
                            </li>
                            <li class="link">
                                <a href="classes/Skill.html" data-type="entity-link" >Skill</a>
                            </li>
                            <li class="link">
                                <a href="classes/Skills.html" data-type="entity-link" >Skills</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFormDto.html" data-type="entity-link" >UpdateFormDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkExperience.html" data-type="entity-link" >WorkExperience</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormService.html" data-type="entity-link" >FormService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});