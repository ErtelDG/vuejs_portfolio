<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const closeInprint = () => {
   store.state.inprintOpen = store.state.inprintOpen ? false : true;
};
</script>

<template>
   <div id="inprintTop" class="min-w-min h-full bg-tertiary text-white grid grid-cols-12 grid-rows-none" :class="{ hidden: !store.state.inprintOpen }">
      <div
         class="cursor-pointer object-scale-down fill-white hover:fill-secondary col-start-11 col-end-13 row-start-1 row-end-1 h-16 flex flex-end items-center"
         @click="closeInprint()"
      >
         <svg
            enable-background="new 0 0 24 24"
            version="1.1"
            viewBox="0 0 24 24"
            xml:space="preserve"
            width="1.5rem"
            height="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
         >
            <g id="grid_system" />
            <g id="_icons">
               <path
                  d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"
               />
            </g>
         </svg>
      </div>
      <div
         class="col-start-2 col-end-12 row-start-2 row-end-3 text-clip text-xs text-center xl:flex xl:flex-col xl:justify-center xl:items-center xl:mx-[calc((100vw-1024px)/2)]"
      >
         <h1 class="text-2xl">Impressum</h1>
         <br />
         <h2>Angaben gemäß § 5 TMG:</h2>
         <br />
         <p><br />Dennis Georg Ertel</p>
         <br />
         <h3>Postanschrift:</h3>
         <br />
         <h3>Kontakt:</h3>
         <p>Telefon: +49 162 1531349<br />E-Mail: contact@denniscodeworld.de</p>
         <br />
         <br />
         <br />
         <h2>Hinweise zur Website</h2>
         <br />
         <br />
         <h2>Information gemäß § 36 VSBG</h2>
         <br />
         <p>
            Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser
            Website:
         </p>
         <br />
         <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
         <br />
         <p></p>
         <br />
         <p>
            <em
               >Das Impressum wurde mit dem
               <a href="https://www.activemind.de/datenschutz/impressums-generator/">Impressums-Generator der activeMind AG</a> erstellt.</em
            >
         </p>
         <br />
         <br /><br />

         <h1 class="text-2xl">Datenschutzerklärung</h1>
         <br />
         <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
         <br />
         <p>Dennis Georg Ertel</p>
         <br />
         <h2>Ihre Betroffenenrechte</h2>
         <br />
         <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
         <br />
         <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
            <li>
               Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
            </li>
         </ul>
         <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
         <br />
         <p>
            Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres
            Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
         </p>
         <br />
         <p>
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:
            <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow"
               >https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a
            >.
         </p>
         <br />
         <p></p>
         <br />
         <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
         <br />
         <h3>Art und Zweck der Verarbeitung:</h3>
         <p>
            Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch
            Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
            Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
         </p>
         <br />
         <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
         <br />
         <ul>
            <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
            <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
            <li>zur Optimierung unserer Website.</li>
         </ul>
         <p>
            Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert statistisch
            ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
         </p>
         <br />
         <h3>Rechtsgrundlage und berechtigtes Interesse:</h3>
         <p>
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und
            Funktionalität unserer Website.
         </p>
         <br />
         <h3>Empfänger:</h3>
         <p>
            Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.
         </p>
         <br />
         <p></p>
         <br />
         <h3>Speicherdauer:</h3>
         <p>
            Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der
            Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.
         </p>
         <br />
         <p></p>
         <br />
         <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
         <p>
            Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der
            Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt
            sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
         </p>
         <br />
         <p></p>
         <br />
         <h2>Kontaktformular</h2>
         <br />
         <h3>Art und Zweck der Verarbeitung:</h3>
         <p>
            Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen
            E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe
            weiterer Daten ist optional.
         </p>
         <br />
         <h3>Rechtsgrundlage:</h3>
         <p>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
         </p>
         <br />
         <p>
            Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum
            Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
         </p>
         <br />
         <p>
            Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur
            Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
         </p>
         <br />
         <h3>Empfänger:</h3>
         <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
         <br />
         <p></p>
         <br />
         <h3>Speicherdauer:</h3>
         <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
         <br />
         <p>
            Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf
            dieser Fristen.
         </p>
         <br />
         <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
         <p>
            Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre
            E-Mail-Adresse und den Grund der Anfrage mitteilen.
         </p>
         <br />
         <p></p>
         <br />
         <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
         <br />
         <p>
            Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google
            LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.
         </p>
         <br />
         <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow" target="_blank">https://developers.google.com/fonts/faq</a> und in der
            Datenschutzerklärung von Google:
            <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow" target="_blank">https://www.google.com/policies/privacy/</a>.
         </p>
         <br />
         <p></p>
         <br />
         <h2>SSL-Verschlüsselung</h2>
         <br />
         <p>
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren
            (z. B. SSL) über HTTPS.
         </p>
         <br />
         <p></p>
         <br />
         <hr />
         <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
         <br />
         <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
         <p>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender
            personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch
            einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
         </p>
         <br />
         <p>
            Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe
            für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
            oder Verteidigung von Rechtsansprüchen.
         </p>
         <br />
         <h3>Empfänger eines Widerspruchs</h3>
         <p>Dennis Georg Ertel <br />Telefon: +49 162 1531349 <br />E-Mail: contact@denniscodeworld.de</p>
         <br />
         <hr />
         <h2>Änderung unserer Datenschutzbestimmungen</h2>
         <br />
         <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen
            unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.
         </p>
         <br />
         <h2>Fragen an den Datenschutzbeauftragten</h2>
         <br />
         <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche
            Person in unserer Organisation:
         </p>
         <br />
         <p></p>
         <br />
         <p>
            <em
               >Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für
               <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</a>
               (Version #2020-09-30).</em
            >
         </p>
         <br />
      </div>
   </div>
</template>

<style scoped></style>
