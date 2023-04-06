"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[920],{94920:(n,t,e)=>{e.r(t),e.d(t,{OrganizationImportExportModule:()=>st});var o=e(55602),i=e(92785),a=e(31131),r=e(78817),s=e(92236),c=e(23031),p=e(29083),u=e(71146),l=e(25158),d=e(47064),f=e(77494),g=e(82083),h=e(65204),m=e(24852),x=e(32100),_=e(14424),U=e(87483),y=e(83924),v=e(27885),k=e(64751),b=e(98645),w=e(86290),Z=e(19419),Q=e(24610),A=e(25376),S=e(53707),I=e(70919),E=e(24637),J=e(11512),N=e(54666),T=e(1e4),C=e(36179),Y=e(44358),B=e(21656),q=e(17404),O=function(n,t,e,o){return new(e||(e=Promise))((function(i,a){function r(n){try{c(o.next(n))}catch(t){a(t)}}function s(n){try{c(o.throw(n))}catch(t){a(t)}}function c(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,s)}c((o=o.apply(n,t||[])).next())}))};function F(n,t){1&n&&(m.TgZ(0,"app-callout",15),m.ALo(1,"i18n"),m._uU(2),m.ALo(3,"i18n"),m.qZA()),2&n&&(m.s9C("title",m.lcZ(1,2,"vaultExportDisabled")),m.xp6(2),m.hij("\n    ",m.lcZ(3,4,"personalVaultExportPolicyInEffect"),"\n  "))}function P(n,t){if(1&n&&m._UZ(0,"app-export-scope-callout",16),2&n){const n=m.oxw(2);m.Q6J("organizationId",n.organizationId)}}function V(n,t){if(1&n&&(m.TgZ(0,"option",17),m._uU(1),m.qZA()),2&n){const n=t.$implicit;m.Q6J("value",n.value),m.xp6(1),m.Oqu(n.name)}}function L(n,t){if(1&n){const n=m.EpF();m.ynx(0),m._uU(1,"\n          "),m.TgZ(2,"bit-form-field"),m._uU(3,"\n            "),m.TgZ(4,"bit-label"),m._uU(5),m.ALo(6,"i18n"),m.qZA(),m._uU(7,"\n            "),m._UZ(8,"input",28),m._uU(9,"\n            "),m.TgZ(10,"button",29),m.NdJ("toggledChange",(function(t){m.CHM(n);const e=m.oxw(3);return m.KtG(e.showFilePassword=t)})),m.qZA(),m._uU(11,"\n            "),m.TgZ(12,"bit-hint"),m._uU(13),m.ALo(14,"i18n"),m.qZA(),m._uU(15,"\n          "),m.qZA(),m._uU(16,"\n          "),m.TgZ(17,"bit-form-field"),m._uU(18,"\n            "),m.TgZ(19,"bit-label"),m._uU(20),m.ALo(21,"i18n"),m.qZA(),m._uU(22,"\n            "),m._UZ(23,"input",30),m._uU(24,"\n            "),m.TgZ(25,"button",29),m.NdJ("toggledChange",(function(t){m.CHM(n);const e=m.oxw(3);return m.KtG(e.showFilePassword=t)})),m.qZA(),m._uU(26,"\n          "),m.qZA(),m._uU(27,"\n        "),m.BQk()}if(2&n){const n=m.oxw(3);m.xp6(5),m.Oqu(m.lcZ(6,5,"filePassword")),m.xp6(5),m.Q6J("toggled",n.showFilePassword),m.xp6(3),m.Oqu(m.lcZ(14,7,"exportPasswordDescription")),m.xp6(7),m.Oqu(m.lcZ(21,9,"confirmFilePassword")),m.xp6(5),m.Q6J("toggled",n.showFilePassword)}}function M(n,t){if(1&n&&(m.ynx(0),m._uU(1,"\n        "),m.TgZ(2,"div",18),m._uU(3,"\n          "),m.TgZ(4,"label",19),m._uU(5),m.ALo(6,"i18n"),m.qZA(),m._uU(7,"\n\n          "),m.TgZ(8,"div",20),m._uU(9,"\n            "),m.TgZ(10,"div"),m._uU(11,"\n              "),m._UZ(12,"input",21),m._uU(13,"\n            "),m.qZA(),m._uU(14,"\n            "),m.TgZ(15,"div"),m._uU(16,"\n              "),m.TgZ(17,"label",22),m._uU(18),m.ALo(19,"i18n"),m.qZA(),m._uU(20,"\n            "),m.qZA(),m._uU(21,"\n          "),m.qZA(),m._uU(22,"\n\n          "),m.TgZ(23,"div",23),m._uU(24),m.ALo(25,"i18n"),m.qZA(),m._uU(26,"\n\n          "),m.TgZ(27,"div",24),m._uU(28,"\n            "),m.TgZ(29,"div"),m._uU(30,"\n              "),m._UZ(31,"input",25),m._uU(32,"\n            "),m.qZA(),m._uU(33,"\n            "),m.TgZ(34,"div"),m._uU(35,"\n              "),m.TgZ(36,"label",26),m._uU(37),m.ALo(38,"i18n"),m.qZA(),m._uU(39,"\n            "),m.qZA(),m._uU(40,"\n          "),m.qZA(),m._uU(41,"\n\n          "),m.TgZ(42,"div",27),m._uU(43),m.ALo(44,"i18n"),m.qZA(),m._uU(45,"\n        "),m.qZA(),m._uU(46,"\n        "),m._UZ(47,"br"),m._uU(48,"\n\n        "),m.YNc(49,L,28,11,"ng-container",12),m._uU(50,"\n      "),m.BQk()),2&n){const n=m.oxw(2);m.xp6(5),m.hij("\n            ",m.lcZ(6,10,"exportTypeHeading"),"\n          "),m.xp6(7),m.Q6J("value",n.encryptedExportType.AccountEncrypted)("checked",n.fileEncryptionType===n.encryptedExportType.AccountEncrypted),m.xp6(6),m.hij("\n                ",m.lcZ(19,12,"accountRestricted"),"\n              "),m.xp6(6),m.hij("\n            ",m.lcZ(25,14,"accountRestrictedOptionDescription"),"\n          "),m.xp6(7),m.Q6J("value",n.encryptedExportType.FileEncrypted)("checked",n.fileEncryptionType===n.encryptedExportType.FileEncrypted),m.xp6(6),m.Oqu(m.lcZ(38,16,"passwordProtected")),m.xp6(6),m.hij("\n            ",m.lcZ(44,18,"passwordProtectedOptionDescription"),"\n          "),m.xp6(6),m.Q6J("ngIf",n.fileEncryptionType==n.encryptedExportType.FileEncrypted)}}const j=function(n){return{manual:n}};function z(n,t){if(1&n){const n=m.EpF();m.TgZ(0,"form",1,2),m.NdJ("ngSubmit",(function(){m.CHM(n);const t=m.oxw();return m.KtG(t.submit())})),m._uU(2,"\n  "),m.TgZ(3,"div",3),m._uU(4,"\n    "),m.TgZ(5,"h1"),m._uU(6),m.ALo(7,"i18n"),m.qZA(),m._uU(8,"\n  "),m.qZA(),m._uU(9,"\n\n  "),m.YNc(10,F,4,6,"app-callout",4),m._uU(11,"\n  "),m.YNc(12,P,1,1,"app-export-scope-callout",5),m._uU(13,"\n\n  "),m.TgZ(14,"div",6),m._uU(15,"\n    "),m.TgZ(16,"div",7),m._uU(17,"\n      "),m.TgZ(18,"bit-form-field"),m._uU(19,"\n        "),m.TgZ(20,"bit-label",8),m._uU(21),m.ALo(22,"i18n"),m.qZA(),m._uU(23,"\n        "),m.TgZ(24,"select",9),m._uU(25,"\n          "),m.YNc(26,V,2,2,"option",10),m._uU(27,"\n        "),m.qZA(),m._uU(28,"\n      "),m.qZA(),m._uU(29,"\n    "),m.qZA(),m._uU(30,"\n  "),m.qZA(),m._uU(31,"\n  "),m.TgZ(32,"div",6),m._uU(33,"\n    "),m.TgZ(34,"div",11),m._uU(35,"\n      "),m.YNc(36,M,51,20,"ng-container",12),m._uU(37,"\n\n      "),m.TgZ(38,"button",13),m._uU(39,"\n        "),m._UZ(40,"i",14),m.ALo(41,"i18n"),m._uU(42,"\n        "),m.TgZ(43,"span"),m._uU(44),m.ALo(45,"i18n"),m.qZA(),m._uU(46,"\n      "),m.qZA(),m._uU(47,"\n    "),m.qZA(),m._uU(48,"\n  "),m.qZA(),m._uU(49,"\n"),m.qZA()}if(2&n){const n=m.MAs(1),t=m.oxw();m.Q6J("appApiAction",t.formPromise)("formGroup",t.exportForm),m.xp6(6),m.Oqu(m.lcZ(7,12,"exportVault")),m.xp6(4),m.Q6J("ngIf",t.disabledByPolicy),m.xp6(2),m.Q6J("ngIf",!t.disabledByPolicy),m.xp6(9),m.Oqu(m.lcZ(22,14,"fileFormat")),m.xp6(5),m.Q6J("ngForOf",t.formatOptions),m.xp6(10),m.Q6J("ngIf","encrypted_json"===t.format),m.xp6(2),m.Q6J("disabled",n.loading||t.disabledByPolicy)("ngClass",m.VKq(20,j,t.disabledByPolicy)),m.xp6(2),m.s9C("title",m.lcZ(41,16,"loading")),m.xp6(4),m.Oqu(m.lcZ(45,18,"confirmFormat"))}}class D extends h.Y{constructor(n,t,e,o,i,a,r,s,c,p,u,l){super(n,t,e,o,i,r,s,c,p,u,l),this.route=a}ngOnInit(){const n=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return O(this,void 0,void 0,(function*(){this.route.parent.parent.params.subscribe((n=>O(this,void 0,void 0,(function*(){this.organizationId=n.organizationId})))),yield n.ngOnInit.call(this)}))}checkExportDisabled(){return O(this,void 0,void 0,(function*(){}))}getExportData(){return this.isFileEncryptedExport?this.exportService.getPasswordProtectedExport(this.filePassword,this.organizationId):this.exportService.getOrganizationExport(this.organizationId,this.format)}getFileName(){return super.getFileName("org")}collectEvent(){return O(this,void 0,void 0,(function*(){yield this.eventCollectionService.collect(g.tw.Organization_ClientExportedVault,null,null,this.organizationId)}))}}D.ɵfac=function(n){return new(n||D)(m.Y36(i.$),m.Y36(a.D),m.Y36(x.P),m.Y36(_.T),m.Y36(U.j),m.Y36(l.gz),m.Y36(y.d),m.Y36(v.$),m.Y36(k.i),m.Y36(b.QS),m.Y36(w._),m.Y36(f.Z))},D.ɵcmp=m.Xpm({type:D,selectors:[["app-org-export"]],features:[m.qOj],decls:4,vars:1,consts:[[3,"appApiAction","formGroup","ngSubmit",4,"ngIf"],[3,"appApiAction","formGroup","ngSubmit"],["form",""],[1,"page-header"],["type","error",3,"title",4,"ngIf"],[3,"organizationId",4,"ngIf"],[1,"row"],[1,"col-6"],["for","format",1,"tw-text-lg"],["bitInput","","name","format","formControlName","format"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","col-6"],[4,"ngIf"],["type","submit",1,"btn","btn-primary","btn-submit",3,"disabled","ngClass"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin",3,"title"],["type","error",3,"title"],[3,"organizationId"],[3,"value"],["role","radiogroup","aria-labelledby","exportTypeHeading"],["id","exportTypeHeading",1,"tw-semi-bold","tw-text-lg"],["appBoxRow","","name","FileTypeOptions",1,"tw-flex","tw-items-center"],["type","radio","name","fileEncryptionType","id","AccountEncrypted","formControlName","fileEncryptionType",1,"radio",3,"value","checked"],["for","AccountEncrypted",1,"tw-semi-bold","tw-text-md","tw-my-1","tw-ml-1"],[1,"tw-regular","ml-3","pb-2","tw-text-sm"],[1,"tw-flex","tw-items-center"],["type","radio","name","fileEncryptionType","id","FileEncrypted","formControlName","fileEncryptionType",1,"radio",3,"value","checked"],["for","FileEncrypted",1,"tw-semi-bold","tw-text-md","tw-my-1","tw-ml-1"],[1,"tw-regular","ml-3","tw-text-sm"],["bitInput","","type","password","id","filePassword","formControlName","filePassword","name","password"],["type","button","bitSuffix","","bitIconButton","","bitPasswordInputToggle","",3,"toggled","toggledChange"],["bitInput","","type","password","id","confirmFilePassword","formControlName","confirmFilePassword","name","confirmFilePassword"]],template:function(n,t){1&n&&(m._uU(0,"\n"),m._uU(1,"\n"),m.YNc(2,z,50,22,"form",0),m._uU(3,"\n")),2&n&&(m.xp6(2),m.Q6J("ngIf",t.exportForm))},dependencies:[Z.mk,Z.sg,Z.O5,b._Y,b.YN,b.Kr,b.Fj,b.EJ,b._,b.JJ,b.JL,b.sg,b.u,Q.b,A.$,S.O,I.N,E.d,J.G,N.w,T.e,C.u,Y.M,B.Q,q.C],encapsulation:2});var K=e(58691),G=e(18058),X=e(4871),R=function(n,t,e,o){return new(e||(e=Promise))((function(i,a){function r(n){try{c(o.next(n))}catch(t){a(t)}}function s(n){try{c(o.throw(n))}catch(t){a(t)}}function c(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,s)}c((o=o.apply(n,t||[])).next())}))};function H(n,t){1&n&&(m.TgZ(0,"app-callout",21),m._uU(1),m.ALo(2,"i18n"),m.qZA()),2&n&&(m.xp6(1),m.hij("\n  ",m.lcZ(2,1,"personalOwnershipPolicyInEffectImports"),"\n"))}function $(n,t){if(1&n&&(m.TgZ(0,"option",22),m._uU(1),m.qZA()),2&n){const n=t.$implicit;m.Q6J("ngValue",n.id),m.xp6(1),m.Oqu(n.name)}}function W(n,t){if(1&n&&(m.TgZ(0,"option",22),m._uU(1),m.qZA()),2&n){const n=t.$implicit;m.Q6J("ngValue",n.id),m.xp6(1),m.Oqu(n.name)}}function nn(n,t){if(1&n&&(m.ynx(0),m._uU(1,"\n            "),m._UZ(2,"option",23),m._uU(3,"\n            "),m.YNc(4,W,2,2,"option",9),m._uU(5,"\n          "),m.BQk()),2&n){const n=m.oxw();m.xp6(4),m.Q6J("ngForOf",n.importOptions)}}function tn(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      See detailed instructions on our help site at\n      "),m.TgZ(2,"a",25),m._uU(3,"\n        https://bitwarden.com/help/export-your-data/"),m.qZA(),m._uU(4,"\n    "),m.BQk())}function en(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      See detailed instructions on our help site at\n      "),m.TgZ(2,"a",26),m._uU(3,"\n        https://bitwarden.com/help/import-from-lastpass/"),m.qZA(),m._uU(4,"\n    "),m.BQk())}function on(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the KeePassX desktop application, navigate to "Database" → "Export to CSV file" and\n      save the CSV file.\n    '),m.BQk())}function an(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      In the Avira web vault, go to "Settings" → "My Data" → "Export data" and save the\n      CSV file.\n    '),m.BQk())}function rn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      In the Blur web vault, click your username at the top and go to "Settings" → "Export\n      Data", then click "Export CSV" for your "Accounts".\n    '),m.BQk())}function sn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the SaveInCloud desktop application, navigate to "File" → "Export" → "As XML"\n      and save the XML file.\n    '),m.BQk())}function cn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Padlock desktop application, click the hamburger icon in the top left corner and\n      navigate to "Settings" → "Export" button and save the file "As CSV".\n    '),m.BQk())}function pn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the KeePass 2 desktop application, navigate to "File" → "Export" and select the\n      "KeePass XML (2.x)" option.\n    '),m.BQk())}function un(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Universal Password Manager desktop application, navigate to "Database" →\n      "Export" and save the CSV file.\n    '),m.BQk())}function ln(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the SaferPass browser extension, click the hamburger icon in the top left corner and\n      navigate to "Settings". Click the "Export accounts" button to save the CSV file.\n    '),m.BQk())}function dn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Meldium web vault, navigate to "Settings". Locate the "Export data" function and\n      click "Show me my data" to save the CSV file.\n    '),m.BQk())}function fn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log into the Keeper web vault (keepersecurity.com/vault). Click on your "account email" (top\n      right) and select "Settings". Go to "Export" and find the "Export to .csv File" option. Click\n      "Export" to save the CSV file.\n    '),m.BQk())}function gn(n,t){1&n&&(m.TgZ(0,"span"),m._uU(1,"\n        The process is exactly the same as importing from Google Chrome.\n      "),m.qZA())}function hn(n,t){if(1&n&&(m.ynx(0),m._uU(1,"\n      "),m.YNc(2,gn,2,0,"span",10),m._uU(3,"\n      See detailed instructions on our help site at\n      "),m.TgZ(4,"a",27),m._uU(5,"\n        https://bitwarden.com/help/import-from-chrome/"),m.qZA(),m._uU(6,"\n    "),m.BQk()),2&n){const n=m.oxw(2);m.xp6(2),m.Q6J("ngIf","chromecsv"!==n.format)}}function mn(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      See detailed instructions on our help site at\n      "),m.TgZ(2,"a",28),m._uU(3,"\n        https://bitwarden.com/help/import-from-firefox/"),m.qZA(),m._uU(4,".\n    "),m.BQk())}function xn(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      See detailed instructions on our help site at\n      "),m.TgZ(2,"a",29),m._uU(3,"\n        https://bitwarden.com/help/import-from-safari/"),m.qZA(),m._uU(4,".\n    "),m.BQk())}function _n(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      See detailed instructions on our help site at\n      "),m.TgZ(2,"a",30),m._uU(3,"\n        https://bitwarden.com/help/import-from-1password/"),m.qZA(),m._uU(4,".\n    "),m.BQk())}function Un(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Password Dragon desktop application, navigate to "File" → "Export" → "To\n      XML". In the dialog that pops up select "All Rows" and check all fields. Click the "Export"\n      button and save the XML file.\n    '),m.BQk())}function yn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Enpass desktop application, navigate to "File" → "Export" → "As CSV".\n      Select "OK" to the warning alert and save the CSV file. Note that the importer only supports\n      files exported while Enpass is set to the English language, so adjust your settings\n      accordingly.\n    '),m.BQk())}function vn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Enpass 6 desktop application, click the menu button and navigate to "File" →\n      "Export". Select the ".json" file format option and save the JSON file.\n    '),m.BQk())}function kn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Password Safe desktop application, navigate to "File" → "Export To" → "XML\n      format..." and save the XML file.\n    '),m.BQk())}function bn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log in to Dashlane, click on "My Account" → "Settings" → "Export file" and select\n      "Export as a CSV file". This will download a zip archive containing various CSV files. Unzip\n      the archive and import each CSV file individually.\n    '),m.BQk())}function wn(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      Dashlane no longer supports the JSON format. Only use this if you have an existing JSON for\n      import. Use the CSV importer when creating new exports.\n    "),m.BQk())}function Zn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the mSecure desktop application, navigate to "File" → "Export" → "CSV File..."\n      and save the CSV file.\n    '),m.BQk())}function Qn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Sticky Password desktop application, navigate to "Menu" (top right) → "Export"\n      → "Export all". Select the unencrypted format XML option and save the XML file.\n    '),m.BQk())}function An(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the True Key desktop application, click the gear icon (top right) and then navigate to\n      "App Settings". Click the "Export" button, enter your password and save the CSV file.\n    '),m.BQk())}function Sn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log into the Clipperz web application (clipperz.is/app). Click the hamburger menu icon in the\n      top right to expand the navigation bar. Navigate to "Data" → "Export". Click the\n      "download HTML+JSON" button to save the HTML file.\n    '),m.BQk())}function In(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the RoboForm Editor desktop application, navigate to "RoboForm" (top left) →\n      "Options" → "Account & Data" and click the "Export" button. Select all of your data,\n      change the "Format" to "CSV file" and then click the "Export" button to save the CSV file.\n      Note: RoboForm only allows you to export Logins. Other items will not be exported.\n    '),m.BQk())}function En(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log into the Passbolt web vault and navigate to the "Passwords" listing. Select all of the\n      passwords you would like to export and click the "Export" button at the top of the listing.\n      Choose the "csv (lastpass)" export format and click the "Export" button.\n    '),m.BQk())}function Jn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Ascendo DataVault desktop application, navigate to "Tools" → "Export". In the\n      dialog that pops up, select the "All Items (DVX, CSV)" option. Click the "Ok" button to save\n      the CSV file.\n    '),m.BQk())}function Nn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Password Boss desktop application, navigate to "File" → "Export data" →\n      "Password Boss JSON - not encrypted" and save the JSON file.\n    '),m.BQk())}function Tn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log into the Zoho web vault (vault.zoho.com). Navigate to "Tools" → "Export Secrets".\n      Select "All Secrets" and click the "Zoho Vault Format CSV" button. Highlight and copy the data\n      from the textarea. Open a text editor like Notepad and paste the data. Save the data from the\n      text editor as\n      '),m.TgZ(2,"code"),m._uU(3,"zoho_export.csv"),m.qZA(),m._uU(4,".\n    "),m.BQk())}function Cn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the SplashID Safe desktop application, click on the SplashID blue lock logo in the top\n      right corner. Navigate to "Export" → "Export as CSV" and save the CSV file.\n    '),m.BQk())}function Yn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the PassKeep mobile app, navigate to "Backup/Restore". Locate the "CSV Backup/Restore"\n      section and click "Backup to CSV" to save the CSV file.\n    '),m.BQk())}function Bn(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      Make sure you have python-keyring and python-gnomekeyring installed. Save the\n      "),m.TgZ(2,"a",31),m._uU(3,"GNOME Keyring Import/Export"),m.qZA(),m._uU(4,"\n      python script to your desktop as "),m.TgZ(5,"code"),m._uU(6,"pw_helper.py"),m.qZA(),m._uU(7,". Open terminal and run\n      "),m.TgZ(8,"code"),m._uU(9,"chmod +rx Desktop/pw_helper.py"),m.qZA(),m._uU(10," and then\n      "),m.TgZ(11,"code"),m._uU(12,"python Desktop/pw_helper.py export Desktop/my_passwords.json"),m.qZA(),m._uU(13,". Then upload the\n      resulting "),m.TgZ(14,"code"),m._uU(15,"my_passwords.json"),m.qZA(),m._uU(16," file here to Bitwarden.\n    "),m.BQk())}function qn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Using the Password Agent desktop application navigate to "File" → "Export", select the\n      "Fields to export" button and check all of the fields, change the "Output format" to "CSV",\n      and then click the "Start" button to save the CSV file.\n    '),m.BQk())}function On(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log into the Passpack website vault and navigate to "Settings" → "Export", then click the\n      "Download" button to save the CSV file.\n    '),m.BQk())}function Fn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open your Passman vault and click on "Settings" in the bottom left corner. In the "Settings"\n      window switch to the "Export credentials" tab and choose "JSON" as the export type. Enter your\n      vault\'s passphrase and click the "Export" button to save the JSON file.\n    '),m.BQk())}function Pn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the Avast Passwords desktop application and navigate to "Settings" → "Import/export\n      data". Select the "Export" button for the "Export to CSV file" option to save the CSV file.\n    '),m.BQk())}function Vn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the Avast Passwords desktop application and navigate to "Settings" → "Import/export\n      data". Select the "Export" button for the "Export to JSON file" option to save the JSON file.\n    '),m.BQk())}function Ln(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the F-Secure KEY desktop application and navigate to "Settings" → "Export\n      Passwords". Select the "Export" button, enter your master password, and save the FSK file.\n    '),m.BQk())}function Mn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the Kaspersky Password Manager desktop application and navigate to "Settings" →\n      "Import/Export". Locate the "Export to text file" section and select the "Export" button to\n      save the TXT file.\n    '),m.BQk())}function jn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the RememBear desktop application and navigate to "Settings" → "Account" →\n      "Export". Enter your master password and select the "Export Anyway" button to save the CSV\n      file.\n    '),m.BQk())}function zn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the PasswordWallet desktop application and navigate to "File" → "Export" →\n      "Visible entries to text file". Enter your password and select the "Ok" button to save the TXT\n      file.\n    '),m.BQk())}function Dn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the Myki desktop browser extension and navigate to "Advanced" → "Export Accounts"\n      and then scan the QR code with your mobile device. Various CSV files will then be saved to\n      your computer\'s downloads folder.\n    '),m.BQk())}function Kn(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      Export your SecureSafe password safe to a CSV file with a comma delimiter.\n    "),m.BQk())}function Gn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the LogMeOnce browser extension, then navigate to "Open Menu" → "Export To" and\n      select "CSV File" to save the CSV file.\n    '),m.BQk())}function Xn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the BlackBerry Password Keeper application, then navigate to "Settings" →\n      "Import/Export". Select "Export Passwords" and follow the instructions on screen to save the\n      unencrypted CSV file.\n    '),m.BQk())}function Rn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the Buttercup desktop application and unlock your vault. Right click on your vault\'s icon\n      and select "Export" to save the CSV file.\n    '),m.BQk())}function Hn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Open the Codebook desktop application and log in. Navigate to "File" → "Export all", then\n      click "Yes" on the dialog and save the CSV file.\n    '),m.BQk())}function $n(n,t){1&n&&(m.ynx(0),m._uU(1,"\n      Open the newest version of the Encryptr desktop application and allow all of your data to\n      sync. Once syncing of your data is complete, the download icon in the top right corner will\n      turn pink. Click the download icon and save the CSV file.\n    "),m.BQk())}function Wn(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      From the Yoti browser extension, click on "Settings", then "Export Saved Logins" and save the\n      CSV file.\n    '),m.BQk())}function nt(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log in to the Psono web vault, click on the "Signed in as"-dropdown, select "Others". Go to\n      the "Export"-tab and select the json type export and then click on Export.\n    '),m.BQk())}function tt(n,t){1&n&&(m.ynx(0),m._uU(1,'\n      Log in to "https://vault.passky.org" → "Import & Export" → "Export" in the Passky\n      section. ("Backup" is unsupported as it is encrypted).\n    '),m.BQk())}function et(n,t){if(1&n&&(m.TgZ(0,"app-callout",24),m._uU(1,"\n    "),m.YNc(2,tn,5,0,"ng-container",10),m._uU(3,"\n    "),m.YNc(4,en,5,0,"ng-container",10),m._uU(5,"\n    "),m.YNc(6,on,2,0,"ng-container",10),m._uU(7,"\n    "),m.YNc(8,an,2,0,"ng-container",10),m._uU(9,"\n    "),m.YNc(10,rn,2,0,"ng-container",10),m._uU(11,"\n    "),m.YNc(12,sn,2,0,"ng-container",10),m._uU(13,"\n    "),m.YNc(14,cn,2,0,"ng-container",10),m._uU(15,"\n    "),m.YNc(16,pn,2,0,"ng-container",10),m._uU(17,"\n    "),m.YNc(18,un,2,0,"ng-container",10),m._uU(19,"\n    "),m.YNc(20,ln,2,0,"ng-container",10),m._uU(21,"\n    "),m.YNc(22,dn,2,0,"ng-container",10),m._uU(23,"\n    "),m.YNc(24,fn,2,0,"ng-container",10),m._uU(25,"\n    "),m._uU(26,"\n    "),m.YNc(27,hn,7,1,"ng-container",10),m._uU(28,"\n    "),m.YNc(29,mn,5,0,"ng-container",10),m._uU(30,"\n    "),m.YNc(31,xn,5,0,"ng-container",10),m._uU(32,"\n    "),m.YNc(33,_n,5,0,"ng-container",10),m._uU(34,"\n    "),m.YNc(35,Un,2,0,"ng-container",10),m._uU(36,"\n    "),m.YNc(37,yn,2,0,"ng-container",10),m._uU(38,"\n    "),m.YNc(39,vn,2,0,"ng-container",10),m._uU(40,"\n    "),m.YNc(41,kn,2,0,"ng-container",10),m._uU(42,"\n    "),m.YNc(43,bn,2,0,"ng-container",10),m._uU(44,"\n    "),m.YNc(45,wn,2,0,"ng-container",10),m._uU(46,"\n    "),m.YNc(47,Zn,2,0,"ng-container",10),m._uU(48,"\n    "),m.YNc(49,Qn,2,0,"ng-container",10),m._uU(50,"\n    "),m.YNc(51,An,2,0,"ng-container",10),m._uU(52,"\n    "),m.YNc(53,Sn,2,0,"ng-container",10),m._uU(54,"\n    "),m.YNc(55,In,2,0,"ng-container",10),m._uU(56,"\n    "),m.YNc(57,En,2,0,"ng-container",10),m._uU(58,"\n    "),m.YNc(59,Jn,2,0,"ng-container",10),m._uU(60,"\n    "),m.YNc(61,Nn,2,0,"ng-container",10),m._uU(62,"\n    "),m.YNc(63,Tn,5,0,"ng-container",10),m._uU(64,"\n    "),m.YNc(65,Cn,2,0,"ng-container",10),m._uU(66,"\n    "),m.YNc(67,Yn,2,0,"ng-container",10),m._uU(68,"\n    "),m.YNc(69,Bn,17,0,"ng-container",10),m._uU(70,"\n    "),m.YNc(71,qn,2,0,"ng-container",10),m._uU(72,"\n    "),m.YNc(73,On,2,0,"ng-container",10),m._uU(74,"\n    "),m.YNc(75,Fn,2,0,"ng-container",10),m._uU(76,"\n    "),m.YNc(77,Pn,2,0,"ng-container",10),m._uU(78,"\n    "),m.YNc(79,Vn,2,0,"ng-container",10),m._uU(80,"\n    "),m.YNc(81,Ln,2,0,"ng-container",10),m._uU(82,"\n    "),m.YNc(83,Mn,2,0,"ng-container",10),m._uU(84,"\n    "),m.YNc(85,jn,2,0,"ng-container",10),m._uU(86,"\n    "),m.YNc(87,zn,2,0,"ng-container",10),m._uU(88,"\n    "),m.YNc(89,Dn,2,0,"ng-container",10),m._uU(90,"\n    "),m.YNc(91,Kn,2,0,"ng-container",10),m._uU(92,"\n    "),m.YNc(93,Gn,2,0,"ng-container",10),m._uU(94,"\n    "),m.YNc(95,Xn,2,0,"ng-container",10),m._uU(96,"\n    "),m.YNc(97,Rn,2,0,"ng-container",10),m._uU(98,"\n    "),m.YNc(99,Hn,2,0,"ng-container",10),m._uU(100,"\n    "),m.YNc(101,$n,2,0,"ng-container",10),m._uU(102,"\n    "),m.YNc(103,Wn,2,0,"ng-container",10),m._uU(104,"\n    "),m.YNc(105,nt,2,0,"ng-container",10),m._uU(106,"\n    "),m.YNc(107,tt,2,0,"ng-container",10),m._uU(108,"\n  "),m.qZA()),2&n){const n=m.oxw();m.s9C("title",n.getFormatInstructionTitle()),m.xp6(2),m.Q6J("ngIf","bitwardencsv"===n.format||"bitwardenjson"===n.format),m.xp6(2),m.Q6J("ngIf","lastpasscsv"===n.format),m.xp6(2),m.Q6J("ngIf","keepassxcsv"===n.format),m.xp6(2),m.Q6J("ngIf","aviracsv"===n.format),m.xp6(2),m.Q6J("ngIf","blurcsv"===n.format),m.xp6(2),m.Q6J("ngIf","safeincloudxml"===n.format),m.xp6(2),m.Q6J("ngIf","padlockcsv"===n.format),m.xp6(2),m.Q6J("ngIf","keepass2xml"===n.format),m.xp6(2),m.Q6J("ngIf","upmcsv"===n.format),m.xp6(2),m.Q6J("ngIf","saferpasscsv"===n.format),m.xp6(2),m.Q6J("ngIf","meldiumcsv"===n.format),m.xp6(2),m.Q6J("ngIf","keepercsv"===n.format),m.xp6(3),m.Q6J("ngIf","chromecsv"===n.format||"operacsv"===n.format||"vivaldicsv"===n.format),m.xp6(2),m.Q6J("ngIf","firefoxcsv"===n.format),m.xp6(2),m.Q6J("ngIf","safaricsv"===n.format),m.xp6(2),m.Q6J("ngIf","1password1pux"===n.format||"1password1pif"===n.format||"1passwordwincsv"===n.format||"1passwordmaccsv"===n.format),m.xp6(2),m.Q6J("ngIf","passworddragonxml"===n.format),m.xp6(2),m.Q6J("ngIf","enpasscsv"===n.format),m.xp6(2),m.Q6J("ngIf","enpassjson"===n.format),m.xp6(2),m.Q6J("ngIf","pwsafexml"===n.format),m.xp6(2),m.Q6J("ngIf","dashlanecsv"===n.format),m.xp6(2),m.Q6J("ngIf","dashlanejson"===n.format),m.xp6(2),m.Q6J("ngIf","msecurecsv"===n.format),m.xp6(2),m.Q6J("ngIf","stickypasswordxml"===n.format),m.xp6(2),m.Q6J("ngIf","truekeycsv"===n.format),m.xp6(2),m.Q6J("ngIf","clipperzhtml"===n.format),m.xp6(2),m.Q6J("ngIf","roboformcsv"===n.format),m.xp6(2),m.Q6J("ngIf","passboltcsv"===n.format),m.xp6(2),m.Q6J("ngIf","ascendocsv"===n.format),m.xp6(2),m.Q6J("ngIf","passwordbossjson"===n.format),m.xp6(2),m.Q6J("ngIf","zohovaultcsv"===n.format),m.xp6(2),m.Q6J("ngIf","splashidcsv"===n.format),m.xp6(2),m.Q6J("ngIf","passkeepcsv"===n.format),m.xp6(2),m.Q6J("ngIf","gnomejson"===n.format),m.xp6(2),m.Q6J("ngIf","passwordagentcsv"===n.format),m.xp6(2),m.Q6J("ngIf","passpackcsv"===n.format),m.xp6(2),m.Q6J("ngIf","passmanjson"===n.format),m.xp6(2),m.Q6J("ngIf","avastcsv"===n.format),m.xp6(2),m.Q6J("ngIf","avastjson"===n.format),m.xp6(2),m.Q6J("ngIf","fsecurefsk"===n.format),m.xp6(2),m.Q6J("ngIf","kasperskytxt"===n.format),m.xp6(2),m.Q6J("ngIf","remembearcsv"===n.format),m.xp6(2),m.Q6J("ngIf","passwordwallettxt"===n.format),m.xp6(2),m.Q6J("ngIf","mykicsv"===n.format),m.xp6(2),m.Q6J("ngIf","securesafecsv"===n.format),m.xp6(2),m.Q6J("ngIf","logmeoncecsv"===n.format),m.xp6(2),m.Q6J("ngIf","blackberrycsv"===n.format),m.xp6(2),m.Q6J("ngIf","buttercupcsv"===n.format),m.xp6(2),m.Q6J("ngIf","codebookcsv"===n.format),m.xp6(2),m.Q6J("ngIf","encryptrcsv"===n.format),m.xp6(2),m.Q6J("ngIf","yoticsv"===n.format),m.xp6(2),m.Q6J("ngIf","psonojson"===n.format),m.xp6(2),m.Q6J("ngIf","passkyjson"===n.format)}}const ot=function(n){return{manual:n}};class it extends G.k{constructor(n,t,e,o,i,a,r,s,c,p){super(n,t,e,i,a,s,c,p),this.route=o,this.organizationService=r}ngOnInit(){const n=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return R(this,void 0,void 0,(function*(){this.route.parent.parent.params.subscribe((t=>R(this,void 0,void 0,(function*(){this.organizationId=t.organizationId,this.successNavigate=["organizations",this.organizationId,"vault"],yield n.ngOnInit.call(this)}))));const t=yield this.organizationService.get(this.organizationId);this.organizationName=t.name}))}submit(){const n=Object.create(null,{submit:{get:()=>super.submit}});return R(this,void 0,void 0,(function*(){(yield this.platformUtilsService.showDialog(this.i18nService.t("importWarning",this.organizationName),this.i18nService.t("warning"),this.i18nService.t("yes"),this.i18nService.t("no"),"warning"))&&n.submit.call(this)}))}}it.ɵfac=function(n){return new(n||it)(m.Y36(a.D),m.Y36(p.wF),m.Y36(l.F0),m.Y36(l.gz),m.Y36(x.P),m.Y36(y.d),m.Y36(K.Mn),m.Y36(v.$),m.Y36(f.Z),m.Y36(X._))},it.ɵcmp=m.Xpm({type:it,selectors:[["app-org-import"]],features:[m.qOj],decls:80,vars:38,consts:[[1,"page-header"],["type","info",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],["form",""],[1,"row"],[1,"col-6"],[1,"form-group"],["for","type"],["id","type","name","Format","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],["type","info",3,"title",4,"ngIf"],["for","file"],[1,"file-selector"],["type","button",1,"btn","btn-outline-primary",3,"disabled","click"],["type","file","id","file","name","file","hidden","",1,"form-control-file",3,"disabled","change"],["fileSelector",""],["for","fileContents"],["id","fileContents","name","FileContents",1,"form-control",3,"ngModel","disabled","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-submit",3,"disabled","ngClass"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin",3,"title"],["type","info"],[3,"ngValue"],["value","-","disabled",""],["type","info",3,"title"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/export-your-data/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-lastpass/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-chrome/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-firefox/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-safari/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-1password/"],["target","_blank","rel","noopener","href","https://bit.ly/2GpOMTg"]],template:function(n,t){if(1&n){const n=m.EpF();m.TgZ(0,"div",0),m._uU(1,"\n  "),m.TgZ(2,"h1"),m._uU(3),m.ALo(4,"i18n"),m.qZA(),m._uU(5,"\n"),m.qZA(),m._uU(6,"\n"),m.YNc(7,H,3,3,"app-callout",1),m._uU(8,"\n"),m.TgZ(9,"form",2,3),m.NdJ("ngSubmit",(function(){return t.submit()})),m._uU(11,"\n  "),m.TgZ(12,"div",4),m._uU(13,"\n    "),m.TgZ(14,"div",5),m._uU(15,"\n      "),m.TgZ(16,"div",6),m._uU(17,"\n        "),m.TgZ(18,"label",7),m._uU(19),m.ALo(20,"i18n"),m.qZA(),m._uU(21,"\n        "),m.TgZ(22,"select",8),m.NdJ("ngModelChange",(function(n){return t.format=n})),m._uU(23,"\n          "),m.YNc(24,$,2,2,"option",9),m._uU(25,"\n          "),m.YNc(26,nn,6,1,"ng-container",10),m._uU(27,"\n        "),m.qZA(),m._uU(28,"\n      "),m.qZA(),m._uU(29,"\n    "),m.qZA(),m._uU(30,"\n  "),m.qZA(),m._uU(31,"\n  "),m.YNc(32,et,109,54,"app-callout",11),m._uU(33,"\n  "),m.TgZ(34,"div",4),m._uU(35,"\n    "),m.TgZ(36,"div",5),m._uU(37,"\n      "),m.TgZ(38,"div",6),m._uU(39,"\n        "),m.TgZ(40,"label",12),m._uU(41),m.ALo(42,"i18n"),m.qZA(),m._uU(43,"\n        "),m._UZ(44,"br"),m._uU(45,"\n        "),m.TgZ(46,"div",13),m._uU(47,"\n          "),m.TgZ(48,"button",14),m.NdJ("click",(function(){m.CHM(n);const t=m.MAs(55);return m.KtG(t.click())})),m._uU(49),m.ALo(50,"i18n"),m.qZA(),m._uU(51),m.ALo(52,"i18n"),m.qZA(),m._uU(53,"\n        "),m.TgZ(54,"input",15,16),m.NdJ("change",(function(n){return t.setSelectedFile(n)})),m.qZA(),m._uU(56,"\n      "),m.qZA(),m._uU(57,"\n    "),m.qZA(),m._uU(58,"\n  "),m.qZA(),m._uU(59,"\n  "),m.TgZ(60,"div",6),m._uU(61,"\n    "),m.TgZ(62,"label",17),m._uU(63),m.ALo(64,"i18n"),m.qZA(),m._uU(65,"\n    "),m.TgZ(66,"textarea",18),m.NdJ("ngModelChange",(function(n){return t.fileContents=n})),m.qZA(),m._uU(67,"\n  "),m.qZA(),m._uU(68,"\n  "),m.TgZ(69,"button",19),m._uU(70,"\n    "),m._UZ(71,"i",20),m.ALo(72,"i18n"),m._uU(73,"\n    "),m.TgZ(74,"span"),m._uU(75),m.ALo(76,"i18n"),m.qZA(),m._uU(77,"\n  "),m.qZA(),m._uU(78,"\n"),m.qZA(),m._uU(79,"\n")}2&n&&(m.xp6(3),m.Oqu(m.lcZ(4,20,"importData")),m.xp6(4),m.Q6J("ngIf",t.importBlockedByPolicy),m.xp6(12),m.hij("1. ",m.lcZ(20,22,"selectFormat"),""),m.xp6(3),m.Q6J("ngModel",t.format)("disabled",t.importBlockedByPolicy),m.xp6(2),m.Q6J("ngForOf",t.featuredImportOptions),m.xp6(2),m.Q6J("ngIf",t.importOptions&&t.importOptions.length),m.xp6(6),m.Q6J("ngIf",t.format),m.xp6(9),m.hij("2. ",m.lcZ(42,24,"selectImportFile"),""),m.xp6(7),m.Q6J("disabled",t.importBlockedByPolicy),m.xp6(1),m.hij("\n            ",m.lcZ(50,26,"chooseFile"),"\n          "),m.xp6(2),m.hij("\n          ",t.fileSelected?t.fileSelected.name:m.lcZ(52,28,"noFileChosen"),"\n        "),m.xp6(3),m.Q6J("disabled",t.importBlockedByPolicy),m.xp6(9),m.Oqu(m.lcZ(64,30,"orCopyPasteFileContents")),m.xp6(3),m.Q6J("ngModel",t.fileContents)("disabled",t.importBlockedByPolicy),m.xp6(3),m.Q6J("disabled",t.loading||t.importBlockedByPolicy)("ngClass",m.VKq(36,ot,t.importBlockedByPolicy)),m.xp6(2),m.s9C("title",m.lcZ(72,32,"loading")),m.xp6(4),m.Oqu(m.lcZ(76,34,"importData")))},dependencies:[Z.mk,Z.sg,Z.O5,b.YN,b.Kr,b.Fj,b.EJ,b.JJ,b.JL,b.Q7,b.On,b.F,S.O,q.C],encapsulation:2});const at=[{path:"import",component:it,canActivate:[d.G],data:{titleId:"importData",organizationPermissions:n=>n.canAccessImportExport}},{path:"export",component:D,canActivate:[d.G],data:{titleId:"exportVault",organizationPermissions:n=>n.canAccessImportExport}}];class rt{}rt.ɵfac=function(n){return new(n||rt)},rt.ɵmod=m.oAB({type:rt}),rt.ɵinj=m.cJS({imports:[l.Bz.forChild(at)]});class st{}st.ɵfac=function(n){return new(n||st)},st.ɵmod=m.oAB({type:st}),st.ɵinj=m.cJS({providers:[{provide:p.rZ,useClass:p.gO,deps:[o.s]},{provide:p.wF,useClass:p.Y5,deps:[s.u,c.s,p.rZ,a.D,r.a,i.$]}],imports:[u.m,u.f,rt]})}}]);
//# sourceMappingURL=920.f1ef95f205311d0c406b.js.map