var toCompareAgainstDescriptors = [//kim
    [-0.10325220972299576,0.04181282967329025,0.08283136785030365,-0.06674236804246902,-0.14101123809814453,-0.055129438638687134,-0.038683969527482986,-0.14436988532543182,0.08574482053518295,-0.13257184624671936,0.1992029994726181,-0.12027720361948013,-0.24952010810375214,-0.07665307074785233,-0.033460553735494614,0.19304926693439484,-0.08162906020879745,-0.12202545255422592,-0.053488414734601974,0.016793381422758102,0.09948346018791199,-0.00841446127742529,0.010314398445189,0.02161574736237526,-0.06408703327178955,-0.30773571133613586,-0.09603345394134521,-0.05968503654003143,0.0014083035057410598,-0.08130631595849991,-0.1166415810585022,0.043327029794454575,-0.16764555871486664,-0.089057058095932,-0.0231596939265728,0.09925424307584763,-0.023076005280017853,-0.09414990991353989,0.11140099167823792,-0.018203845247626305,-0.2066076397895813,-0.03911292180418968,0.026646876707673073,0.2004585713148117,0.166072279214859,0.05839954689145088,0.046800363808870316,-0.10373193770647049,0.07853584736585617,-0.20312343537807465,-0.00194350047968328,0.07028525322675705,0.04464549943804741,0.04725712537765503,0.014771101996302605,-0.08339741080999374,0.05218435451388359,0.16241498291492462,-0.15003806352615356,0.05422086641192436,0.1531316339969635,-0.06600851565599442,-0.05438893660902977,-0.10405273735523224,0.29836514592170715,0.10736553370952606,-0.1224571019411087,-0.11185021698474884,0.13500425219535828,-0.11381997168064117,-0.12583470344543457,-0.03185376524925232,-0.15277425944805145,-0.12103275954723358,-0.26888370513916016,0.012354057282209396,0.38332563638687134,0.12061229348182678,-0.19535167515277863,0.016239048913121223,-0.05129096657037735,0.06070981174707413,0.17200200259685516,0.1011057049036026,0.0026144105941057205,0.02155468985438347,-0.09943272173404694,-0.024692675098776817,0.1908605992794037,-0.07272639870643616,0.03484463691711426,0.21938621997833252,-0.010429469868540764,0.06941647082567215,0.013447235338389874,0.014995966106653214,-0.07450364530086517,0.04791386425495148,-0.10187382251024246,-0.008976656943559647,0.0807730183005333,-0.05926091596484184,0.05006415769457817,0.15479803085327148,-0.0914141908288002,0.1037643700838089,-0.05085626244544983,0.09634384512901306,0.07433485239744186,-0.023396598175168037,-0.07629451155662537,-0.08621665090322495,0.07973617315292358,-0.160526841878891,0.12667402625083923,0.16681838035583496,0.015863165259361267,0.04854419082403183,0.11729240417480469,0.13095195591449738,0.015208004042506218,0.02691052109003067,-0.2397594302892685,-0.01142256148159504,0.14230620861053467,-0.02847864292562008,0.0503908134996891,0.029903016984462738],
    [-0.07865319401025772,0.01995093747973442,0.09457188844680786,-0.08133309334516525,-0.15847736597061157,-0.03750988841056824,-0.03482445701956749,-0.16686581075191498,0.09724992513656616,-0.14480142295360565,0.18557608127593994,-0.10416879504919052,-0.24747593700885773,-0.07236093282699585,-0.03436941280961037,0.1764930635690689,-0.09949059039354324,-0.13560454547405243,-0.09853427112102509,-0.007337966002523899,0.08683155477046967,0.012045466341078281,0.0019742664881050587,-0.03253036364912987,-0.022089459002017975,-0.366020530462265,-0.05148920789361,-0.04251256585121155,0.010170959867537022,-0.03854353725910187,-0.051905274391174316,0.0866880789399147,-0.17992839217185974,-0.08160839974880219,-0.01720304973423481,0.09126719832420349,-0.011355558410286903,-0.0910135805606842,0.09593705087900162,-0.022944200783967972,-0.24903540313243866,-0.03218758851289749,-0.008198779076337814,0.16105395555496216,0.14904890954494476,0.06073320657014847,0.06884965300559998,-0.1465855985879898,0.13342826068401337,-0.18595381081104279,0.005644638556987047,0.06696396321058273,0.08470356464385986,-0.00826527364552021,0.037057340145111084,-0.10083962231874466,0.027300570160150528,0.14185678958892822,-0.1184212863445282,-0.004461503587663174,0.1225871741771698,-0.07792510837316513,-0.06562170386314392,-0.13631345331668854,0.24224942922592163,0.06067821756005287,-0.0743827223777771,-0.09124008566141129,0.1720443069934845,-0.0367027185857296,-0.11536270380020142,-0.010409525595605373,-0.16515128314495087,-0.10654173791408539,-0.25703150033950806,0.0057814838364720345,0.41964277625083923,0.0457950234413147,-0.1950003206729889,-0.011075062677264214,-0.056932102888822556,0.08475351333618164,0.14546522498130798,0.08365119993686676,-0.017967717722058296,0.007577504962682724,-0.08574515581130981,-0.008821059949696064,0.20078414678573608,-0.11166185885667801,-0.0032244366593658924,0.1713869720697403,-0.0147395646199584,0.05385403335094452,0.0007581675890833139,0.005115507636219263,-0.06750345230102539,0.07536520808935165,-0.12503935396671295,-0.05890936776995659,0.1464761197566986,-0.017836857587099075,0.033064816147089005,0.13485802710056305,-0.12894456088542938,0.10591486096382141,-0.04750530421733856,0.0729651227593422,0.11721736192703247,-0.0805659219622612,-0.029385903850197792,-0.0650956854224205,0.09898947179317474,-0.1317519247531891,0.12498868256807327,0.16858027875423431,0.015916557982563972,0.09643615782260895,0.08491963893175125,0.08832874149084091,0.0013373339315876365,-0.005705554969608784,-0.26403918862342834,-0.04188096150755882,0.18265338242053986,0.02460283227264881,0.017338519915938377,0.009241163730621338],
    [-0.028106363490223885,0.010402679443359375,0.04407987371087074,-0.05352604016661644,-0.12069110572338104,0.008274098858237267,-0.06429626792669296,-0.16534216701984406,0.09302736073732376,-0.1466061919927597,0.22956165671348572,-0.05857417732477188,-0.2145477831363678,-0.1725640743970871,-0.05543756112456322,0.206976518034935,-0.16189317405223846,-0.15667468309402466,-0.12199024111032486,-0.028345592319965363,0.04678138345479965,-0.004631239455193281,0.020756656304001808,-0.05498416721820831,-0.07784943282604218,-0.36957991123199463,-0.088563933968544,-0.03795303404331207,0.07653723657131195,-0.04851965233683586,-0.07777459919452667,0.036248233169317245,-0.20941327512264252,-0.07470430433750153,0.028636109083890915,0.09666315466165543,-0.013043468818068504,-0.08465097844600677,0.17481586337089539,-0.0017602809239178896,-0.21418213844299316,0.01514850277453661,0.04122849553823471,0.18457846343517303,0.17815148830413818,0.08910468965768814,0.06299596279859543,-0.1732165515422821,0.15939292311668396,-0.14766336977481842,0.05286182090640068,0.11400379240512848,0.07244296371936798,0.03406886011362076,0.024750830605626106,-0.0919659435749054,0.03433345630764961,0.11697907000780106,-0.13700418174266815,-0.018040675669908524,0.11562792211771011,-0.07785463333129883,-0.09746725112199783,-0.12945713102817535,0.2162753790616989,0.027770381420850754,-0.08428925275802612,-0.1967708319425583,0.1515919715166092,-0.12440023571252823,-0.09285413473844528,0.014267902821302414,-0.1272028088569641,-0.10127157717943192,-0.36029091477394104,-0.015712862834334373,0.413729190826416,0.10059299319982529,-0.1977636069059372,0.04096377640962601,-0.019440514966845512,0.015398511663079262,0.18658606708049774,0.11630188673734665,-0.019722111523151398,0.07171747088432312,-0.09815401583909988,-0.010236307978630066,0.20488622784614563,-0.08402342349290848,-0.013514379039406776,0.17966268956661224,-0.0016083800001069903,0.07763486355543137,0.039378054440021515,0.02053705044090748,-0.08365623652935028,0.043072912842035294,-0.12143369764089584,-0.03572872281074524,0.12904109060764313,0.009306706488132477,0.06109846383333206,0.08974382281303406,-0.07675284892320633,0.13501332700252533,-0.055600591003894806,0.06911482661962509,0.07653500884771347,-0.09637611359357834,-0.09380388259887695,-0.07717455923557281,0.12252093106508255,-0.20534756779670715,0.12588444352149963,0.16433367133140564,0.027238614857196808,0.09369857609272003,0.1732977330684662,0.1296171098947525,-0.0537860281765461,0.004320892505347729,-0.2603057622909546,-0.05193159356713295,0.10083569586277008,-0.01758878119289875,0.11515233665704727,0.009002271108329296],
    [-0.03953573480248451,0.04821823909878731,0.11457459628582001,-0.004248479846864939,-0.09175556153059006,-0.03180227801203728,-0.07217703759670258,-0.15802516043186188,0.1067962497472763,-0.13407526910305023,0.22101348638534546,-0.07065374404191971,-0.22771555185317993,-0.12895715236663818,-0.023253582417964935,0.1873398721218109,-0.0808328315615654,-0.16482849419116974,-0.08342979848384857,-0.03354841470718384,0.06735203415155411,-0.014311782084405422,0.038000885397195816,-0.004803331568837166,-0.06989660859107971,-0.3746870160102844,-0.08567360788583755,-0.046164751052856445,0.022808944806456566,-0.06905599683523178,-0.12390019744634628,0.09100671857595444,-0.1823909729719162,-0.0949745923280716,-0.006476685404777527,0.12541040778160095,-0.00219558528624475,-0.09783118963241577,0.1450406163930893,-0.022954683750867844,-0.20413245260715485,-0.04574054479598999,0.005478705745190382,0.20210938155651093,0.1522858887910843,0.07269202172756195,0.08030271530151367,-0.10088750720024109,0.0736098513007164,-0.15178588032722473,0.03021758608520031,0.08442069590091705,0.1105002760887146,0.03189889341592789,-0.0019720601849257946,-0.12503349781036377,0.044159095734357834,0.11067236214876175,-0.13834834098815918,-0.010135808028280735,0.08431511372327805,-0.1485363394021988,-0.08614089339971542,-0.06623928993940353,0.2587401866912842,0.07083588093519211,-0.07649168372154236,-0.12588399648666382,0.12357791513204575,-0.1024937853217125,-0.09085719287395477,0.002252287231385708,-0.15152248740196228,-0.11863226443529129,-0.35357964038848877,0.0044847228564321995,0.3962390124797821,0.0731704980134964,-0.21705150604248047,0.03536863625049591,-0.01204343605786562,0.05728144198656082,0.1617272049188614,0.14372168481349945,-0.04646848514676094,0.07682618498802185,-0.13220100104808807,0.0123831108212471,0.16770051419734955,-0.07645373791456223,-0.02994871884584427,0.17407254874706268,-0.007858697324991226,0.09470896422863007,0.02777067944407463,0.032343652099370956,-0.03287901356816292,0.059611428529024124,-0.1130056232213974,-0.008007869124412537,0.1361309289932251,0.03040928952395916,0.020559556782245636,0.10351639986038208,-0.11126086115837097,0.05529192090034485,-0.041637860238552094,0.05383565276861191,0.08739043772220612,-0.08725446462631226,-0.09201674163341522,-0.12608079612255096,0.10348917543888092,-0.21521906554698944,0.041611891239881516,0.214924618601799,0.005801983643323183,0.11804056167602539,0.1326816827058792,0.10606872290372849,0.016476621851325035,-0.03351499140262604,-0.26582977175712585,-0.00397974019870162,0.16188105940818787,0.003858196549117565,0.051765408366918564,0.02721666358411312],
    [-0.062350474298000336,0.053106945008039474,0.1139238253235817,0.0018782626139000058,-0.11025317758321762,-0.021130526438355446,-0.05923818051815033,-0.14978964626789093,0.05891365185379982,-0.10268797725439072,0.19149768352508545,-0.09670164436101913,-0.2395968735218048,-0.09739485383033752,-0.020213888958096504,0.1634422242641449,-0.07162333279848099,-0.13478903472423553,-0.06444244831800461,-0.009851379320025444,0.07543560117483139,-0.016297895461320877,0.03547724336385727,-0.03615373745560646,-0.0760883241891861,-0.3525228500366211,-0.07195441424846649,-0.05160512402653694,-0.023962559178471565,-0.026874016970396042,-0.07268712669610977,0.10209649801254272,-0.15690672397613525,-0.04522431641817093,0.0012442766455933452,0.13513967394828796,-0.0015291240997612476,-0.06705059111118317,0.16579081118106842,-0.042723216116428375,-0.23563484847545624,-0.03357034921646118,0.020148422569036484,0.18951448798179626,0.1602599024772644,0.051724549382925034,0.057414744049310684,-0.09132653474807739,0.07194950431585312,-0.14905031025409698,0.0471244715154171,0.10554740577936172,0.06771600991487503,0.012263289652764797,0.034973934292793274,-0.13413938879966736,0.035718630999326706,0.099589504301548,-0.10301673412322998,-0.03150976821780205,0.10182394832372665,-0.12579146027565002,-0.0625506266951561,-0.10149115324020386,0.2447601854801178,0.08558404445648193,-0.08185229450464249,-0.12459692358970642,0.14202812314033508,-0.07249565422534943,-0.09323805570602417,0.008109135553240776,-0.17024022340774536,-0.09857257455587387,-0.32560762763023376,0.011804959736764431,0.4222775995731354,0.04565310478210449,-0.2096540480852127,0.023890430107712746,-0.012879815883934498,0.04054093360900879,0.17394116520881653,0.14015308022499084,-0.025563105940818787,0.038272924721241,-0.10984885692596436,0.0010291053913533688,0.16218429803848267,-0.0800771564245224,-0.03314802423119545,0.14419344067573547,-0.027277100831270218,0.07315870374441147,0.025534378364682198,0.016332773491740227,-0.0368969701230526,0.073773093521595,-0.11873377859592438,-0.005272734444588423,0.1295122504234314,-0.038698554039001465,0.024568358436226845,0.1374984085559845,-0.1286001354455948,0.053724244236946106,-0.03351849317550659,0.07275021076202393,0.08973360806703568,-0.06335736811161041,-0.08268407732248306,-0.06148521974682808,0.1168903037905693,-0.20737025141716003,0.09430938959121704,0.15453357994556427,-0.030893972143530846,0.09548624604940414,0.1428387463092804,0.13207504153251648,0.008135376498103142,-0.004819091875106096,-0.2825978100299835,-0.014696463011205196,0.13143910467624664,0.021246902644634247,0.04493721202015877,0.04902306944131851]
]
