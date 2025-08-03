import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">Last update: 23/04/2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              <strong>1.1</strong> These Terms and Conditions of Use ("Terms and Conditions") regulate access to and use of this website erakulis.com (hereinafter "Website") and the mobile application available on Apple App Store as "ERAKULIS" and on the Google Play Store as "ERAKULIS" (hereinafter "App"), which is the responsibility of ERAKULIS, LDA., with registered office at Rua de Gondarém, n.º 867, Freguesia de Aldoar, Foz do Douro e Nevogilde, 4150-374 Porto, registered at the Commercial Registry Office under the sole registration and tax identification number 516503219, with share capital of € 50,000.00, ("ERAKULIS®").
            </p>
            <p className="mb-4">
              <strong>1.2</strong> These Terms and Conditions establish a legally binding contractual relationship between you and ERAKULIS®.
            </p>
            <p className="mb-4">
              <strong>1.3</strong> Please note that in these Terms and Conditions, "we", "us" and "our" refers to ERAKULIS®, and "you" and "User" refers to any individual who accesses to and uses the Website and App.
            </p>
            <p className="mb-4">
              <strong>1.4</strong> By using or accessing the Website/App or any of the information, data files, written text, graphics, links, audio files or other sounds, photographs, videos or other images (collectively, the "Content"), resources and services (collectively, including the Content, the "Services") made available through the Website/App, you, as a user of or visitor to the same ("User"), accept (i) these Terms and Conditions and confirm that you have read and understood the (ii) Privacy Policy and (iii) Cookies Policy made available on the Website, which form an integral part of these Terms and Conditions.
            </p>
            <p className="mb-4">
              <strong>1.5</strong> Through the Website/App, ERAKULIS® provides the User with access to the Services. The Services, including updates, developments, new tools and/or new properties of the Website/App, are subject to these Terms and Conditions.
            </p>
            <p className="mb-4">
              <strong>1.6</strong> In any event, ERAKULIS® reserves the right to modify, delete or suspend, temporarily or permanently, at any time and without prior notice, the presentation and configuration of the Website, as well as these Terms and Conditions, the Privacy Policy and the Cookies Policy. Therefore, each time the User accesses the Website, the User should always read these Terms and Conditions, the Privacy Policy and the Cookies Policy. You agree that we shall not be liable to you or any third party for any modification, suspension or discontinuance of the Service.
            </p>
            <p className="mb-4">
              <strong>1.7</strong> If the User rejects and does not agree with these Terms and Conditions, or if the User is not eligible to be bound by them, then the User must cease the use and access to the Website and App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. HEALTH DISCLAIMERS</h2>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold text-red-800 dark:text-red-200 mb-2">IMPORTANT HEALTH DISCLAIMERS:</p>
            </div>
            <p className="mb-4">
              <strong>2.1</strong> ERAKULIS® DOES NOT OFFER OR PROVIDE ANY MEDICAL ADVICE OR OTHER HEALTH CARE SERVICE, INCLUDING, WITHOUT LIMITATION, ANY ADVICE, TEST, EVALUATION, PRESCRIPTION, PROCEDURE OR THERAPY RELATING TO EXERCISE, NUTRITION, WEIGHT LOSS OR WELLNESS, MENTAL HEALTH OR RELATING TO THE PREVENTION, DIAGNOSIS OR TREATMENT OF ANY INJURY, ILLNESS, DISEASE OR CONDITION.
            </p>
            <p className="mb-4">
              <strong>2.2</strong> THE INFORMATION PROVIDED ON THE WEBSITE IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS OR TREATMENT. YOU SHOULD CONSULT A QUALIFIED MEDICAL PROFESSIONAL FOR ANY CONCERNS OR QUESTIONS ABOUT YOUR HEALTH.
            </p>
            <p className="mb-4">
              <strong>2.3</strong> DO NOT DISREGARD OR AVOID OBTAINING PROPER MEDICAL ADVICE FOR ANY INFORMATION YOU MAY HAVE READ/OBTAINED ON THE WEBSITE OR IN THE ERAKULIS® SERVICES. YOUR USE OF INFORMATION PROVIDED BY THE ERAKULIS® SERVICES IS SOLELY AT YOUR OWN RISK.
            </p>
            <p className="mb-4">
              <strong>2.4</strong> DO NOT DO THE EXERCISES PROVIDED BY ERAKULIS® IF YOUR DOCTOR OR HEALTHCARE PROVIDER HAS INSTRUCTED YOU NOT TO DO AN EXERCISE PROGRAM. IN THE EVENT THAT YOU EXPERIENCE ANY OF THE FOLLOWING SYMPTOMS: OVERHEATING, DIZZINESS, FAINTING, FATIGUE, SHORTNESS OF BREATH OR CHEST PAIN, HEADACHES, JOINT PAIN, FLUTTER AND BLURRED VISION; PHYSICAL CONDITIONS: PREGNANCY AND POSTPARTUM UP TO 6 MONTHS; AND OTHER CONDITIONS, SUCH AS PATHOLOGIES, YOU MUST STOP EXERCISING AND CONTACT YOUR DOCTOR.
            </p>
            <p className="mb-4">
              <strong>2.5</strong> DO NOT FOLLOW THE NUTRITIONS PLANS PROVIDED BY ERAKULIS® IF YOUR DOCTOR OR HEALTHCARE PROVIDER HAS INSTRUCTED YOU NOT TO DO THE RECIPES OR FOLLOW THE DIETS INCLUDED IN THESE PLANS.
            </p>
            <p className="mb-4">
              <strong>2.6</strong> ERAKULIS® DOES NOT ASSUME ANY LIABILITY FOR INACCURACIES OR MISSTATEMENTS ABOUT EXERCISES, FOOD RECIPES, OR OTHER CONTENT ON THE SERVICES. THE USER IS RESPONSIBLE FOR READING THE INFORMATION ABOUT FOOD PRODUCTS THAT IS PROVIDED BY THEIR RESPECTIVE MANUFACTURERS, INCLUDING COMPOSITION, NUTRITIONAL VALUE, ALLERGENS AND RESTRICTIONS BEFORE CONSUMING THEM. ANY INFORMATION REGARDING FOOD PRODUCTS SHOULD BE SOUGHT FROM THE RESPECTIVE MANUFACTURER.
            </p>
            <p className="mb-4">
              <strong>2.7</strong> ERAKULIS® DOES NOT GUARANTEE THE LEVEL OF SUCCESS AND ATTAINMENT OF OBJECTIVES YOU MIGHT ACHIEVE; THEREFORE, THE USER ACCEPTS THE RISK THAT RESULTS MAY VARY AMONG INDIVIDUALS. TESTIMONIALS AND EXAMPLES PROVIDED IN THE SERVICE ARE EXCEPTIONAL RESULTS AND ARE NOT INTENDED TO REPRESENT OR GUARANTEE THAT ANYONE CAN ACHIEVE THE SAME OR SIMILAR RESULTS. ERAKULIS® DOES NOT GUARANTEE THAT THE USER WILL MAINTAIN RESULTS OBTAINED IF THEY DO NOT CONTINUE TO FOLLOW OUR PROGRAMS.
            </p>
            <p className="mb-4">
              <strong>2.8</strong> EACH USER'S SUCCESS IN TERMS OF HEALTH, WELL-BEING, SPORTS, AND NUTRITION DEPENDS ON THEIR DEDICATION AND MOTIVATION. SIMILAR TO ANY HEALTH-RELATED PROGRAM OR SERVICE, USER RESULTS VARY AND ARE BASED ON VARIOUS FACTORS, INCLUDING BUT NOT LIMITED TO INDIVIDUAL CAPACITY, LIFE EXPERIENCE, GENETIC PROFILE, STARTING POINT, KNOWLEDGE, AND EFFORT. THE USE OF THE SERVICES DEPENDS ON THE USER'S DILIGENCE, AND BY USING THE SERVICES, THE USER AGREES THAT ERAKULIS® IS NOT RESPONSIBLE FOR ANY SUCCESS OR FAILURE OF DESIRED PHYSICAL OUTCOMES DIRECTLY OR INDIRECTLY RELATED TO THE PURCHASE AND USE OF THE SERVICES.
            </p>
            <p className="mb-4">
              <strong>2.9</strong> THE USER EXPRESSLY ASSUMES RESPONSIBILITY AT ITS OWN RISK FOR INJURIES, ILLNESSES, ACCIDENTS OR ANY HEALTH PROBLEMS THAT MAY RESULT ARISING FROM THE USE OF THE SERVICES OR INFORMATION PROVIDED BY THE ERAKULIS® SERVICES.
            </p>
            <p className="mb-4">
              <strong>2.10</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE USER EXPRESSLY AGREES THAT ERAKULIS® DOES NOT PROVIDE MEDICAL ADVICE VIA THE SERVICES. ALL CONTENT PROVIDED THROUGH THE SERVICES, WHETHER PROVIDED BY ERAKULIS® OR THIRD PARTIES (EVEN IF THEY ARE CLAIMING TO BE A DOCTOR) IS NOT INTENDED TO BE AND SHOULD NOT BE USED IN PLACE OF THE ADVICE OF THE USER'S PHYSICIAN OR OTHER HEALTH PROFESSIONALS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Limitation of Liability</h2>
            <p className="mb-4">
              <strong>3.1</strong> ERAKULIS® will exercise reasonable diligence to ensure that all information contained on the Website/App is accurate and up-to-date. However, the use and reading of the content on this Website/App are solely at the User's own risk and is provided as is. By accessing the Website/App, the User acknowledges and accepts that the content may be incomplete or may not meet their needs and requirements.
            </p>
            <p className="mb-4">
              <strong>3.2</strong> The Users are solely and exclusively responsible for their use of the Website/App and its content and for evaluating the information obtained through the Website/App. Your access to and use of the Services is at your own risk.
            </p>
            <p className="mb-4">
              <strong>3.3</strong> ERAKULIS® takes appropriate security measures to detect the presence of viruses. However, Users should be aware that security measures for computer systems on the Internet are not entirely reliable, and therefore ERAKULIS® cannot guarantee the absence of viruses or other elements that may cause changes to the User's computer systems (software and hardware) or the electronic documents and files contained therein.
            </p>
            <p className="mb-4">
              <strong>3.4</strong> ERAKULIS® assumes no responsibility for damages resulting from the delays or blockages in the access and use services provided through the Website/App due to deficiencies or overloading of the Internet, electrical lines or systems or communications system; or damages caused by viruses, service interruptions, malfunctions, failures, interferences, content cancellation, Internet-related issues; or damages related to the non-existence and/or faulty functioning of the User's electronic devices.
            </p>
            <p className="mb-4">
              <strong>3.5</strong> Without limiting or restricting the provisions of applicable law, ERAKULIS® shall not be liable for any breach of its obligations under these Terms and Conditions if such breach is the result of illegal actions by third parties or circumstances beyond its control. ERAKULIS® shall only be liable for any damage caused to the User arising directly from its willful or grossly negligent actions. This does not exclude ERAKULIS®'s liability for damage to life, moral or physical integrity or the health of persons, or liability for non-contractual property damage caused to the counterparty or third parties, provided that it is attributable to ERAKULIS®.
            </p>
            <p className="mb-4">
              <strong>3.6</strong> ERAKULIS® has no liability regarding its right to implement any changes to the Services at any time, with or without notice, that might result in difficulties accessing the Services at certain times and the deletion of, or failure to make available to you, any content or services.
            </p>
            <p className="mb-4">
              <strong>3.7</strong> When an event or fact beyond the reasonable control of ERAKULIS® takes place (Force Majeure), ERAKULIS® shall not be liable or responsible for the breach or delay in performance of any of its obligations under the Contract.
            </p>
            <p className="mb-4">
              <strong>3.8</strong> You acknowledge that the limitations mentioned above might not apply to you, because some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages and for that our liability shall be limited to the maximum extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Approval</h2>
            <p className="mb-4">
              <strong>4.1</strong> Without prejudice to the other clauses of these Terms and Conditions, ERAKULIS® authorizes any User to use this Website/App solely for the purposes set out in these Terms and Conditions.
            </p>
            <p className="mb-4">
              <strong>4.2</strong> Violation of these Terms and Conditions may result in the withdrawal of the license granted by ERAKULIS®.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Use of the Services</h2>
            <p className="mb-4">
              <strong>5.1</strong> To use the Services, the User must be at least 18 years old, or of legal age in the User's country or territory of residence. No individual under the age of 18, or minor in his country or territory of residence, may use the Services, provide any personal data to us, or otherwise submit personal data through the Services (as defined in the Privacy Policy, section 3. - "XII. Minors").
            </p>
            <p className="mb-4">
              <strong>5.2</strong> By using or subscribing to our Services through the Website or App, you represent and warrant that you are a natural person of at least 18 years old.
            </p>
            <p className="mb-4">
              <strong>5.3</strong> ERAKULIS® encourages parents and guardians/legal representatives to monitor their children's use of the Internet and to help us enforce our Terms and Conditions by instructing their children never to use or subscribe to our Services without their permission.
            </p>
            <p className="mb-4">
              <strong>5.4</strong> For the sake of clarity, it is not ERAKULIS®' responsibility to verify, beyond reasonable efforts given the available technology, that:
            </p>
            <p className="mb-4">
              <strong>5.4.1</strong> the individual is actually at least 18 years old; or
            </p>
            <p className="mb-4">
              <strong>5.4.2</strong> the children's parent/guardian/legal representative has authorized the use or subscription of the Services by the child.
            </p>
            <p className="mb-4">
              <strong>5.5</strong> To use the Services, you must create and register a personal online account, providing your personal identification and contact details (namely name, e-mail address, birthdate, gender), physical features (namely current and target weight, height), activity habits (physical exercise preferences and routines) and goals.
            </p>
            <p className="mb-4">
              <strong>5.6</strong> By creating a personal online account for subscription and use of the Services in a particular country or territory you are specifying it as your country or territory of residence.
            </p>
            <p className="mb-4">
              <strong>5.7</strong> If you register a personal online account you warrant that you are responsible for the accuracy and truthfulness of the data you communicate to ERAKULIS®. You also warrant that you will maintain the accuracy and truthfulness of such information.
            </p>
            <p className="mb-4">
              <strong>5.8</strong> In case of violation of these Terms and Conditions, ERAKULIS® reserves the right to suspend or terminate your account, or your access to the Services, with or without notice to you.
            </p>
            <p className="mb-4">
              <strong>5.9</strong> You are fully responsible for all activities that occur under your personal online account. You are responsible for maintaining the confidentiality of your personal account login credentials and you agree to immediately notify us of any unauthorized use of your account. ERAKULIS® will not be liable for any loss or damage arising from your failure to comply with the above requirements.
            </p>
            <p className="mb-4">
              <strong>5.10</strong> To use the Services, the Subscriber needs compatible hardware, software (latest version recommended and sometimes required) and Internet access (fees must apply). The Services' performance may be affected by these factors. You are solely responsible for obtaining the appropriate means (equipment and telecommunication services) necessary to access and use the Services.
            </p>
            <p className="mb-4">
              <strong>5.11</strong> By using or subscribing to one of our Services through the Website or App, you represent and warrant that your use of the Services will not violate any applicable law or regulation or these Terms and Conditions.
            </p>
            <p className="mb-4">
              <strong>5.12</strong> You may not access or use the Services for any purpose other than that for which we make the Services available.
            </p>
            <p className="mb-4">
              <strong>5.13</strong> As an User of the Services you agree to not infringe these Terms and Conditions, to not make any unauthorized use of the Services, to not use the Services for any illegal purpose, to not access the Services through automated or non-human means and to not make the Services available through any means permitting access or use by multiple users at the same time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Subscription Conditions</h2>
            <p className="mb-4">
              <strong>6.1</strong> To access our Services, the User can choose between our free plan or one of the fee-based subscription plans offered by ERAKULIS®. A subscription can be obtained directly from ERAKULIS® on the Website, through App Store or Google Play Store.
            </p>
            <p className="mb-4">
              <strong>6.2</strong> ERAKULIS® accepts no liability whatsoever for any delay or inability to process the subscription due to errors or inadequacies in the data provided by the Subscriber.
            </p>
            <p className="mb-4">
              <strong>6.3</strong> Please note that uninstalling the App or closing your account will not automatically stop your subscription - you must actively cancel the subscription. If you have subscribed the Services through Apple App Store, Google Play Store or through the Website you can only cancel your subscription through that channel.
            </p>
            <p className="mb-4">
              <strong>6.4</strong> Certain Services may require, direct, or suggest the Subscriber to use third-party equipment or connect to third-party apps in some circumstances and/or for certain activities. Such use is subject to the terms and conditions of such equipment and apps and should be made in accordance with the applicable manufacturer's instructions. ERAKULIS® is not responsible or liable for third-party materials, equipment or apps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Subscription Process - Conclusion of the Contract</h2>
            <p className="mb-4">
              <strong>7.1</strong> The subscription plans are presented on the Website or App with a description that allows the Subscriber to know their essential characteristics and their price.
            </p>
            <p className="mb-4">
              <strong>7.2</strong> The Services provided by ERAKULIS® include, in particular, perform nutrition/fitness/mental balance plans, daily progress tracker, nutrition/fitness/mental balance database, general feed, reports and progression, health information and client support, best described on the Website or in the App.
            </p>
            <p className="mb-4">
              <strong>7.3</strong> Some of the Services may no longer be provided by ERAKULIS®, which may also add Services to its portfolio. The Subscriber should always check the Website or App to confirm the Services available and provided at any given time.
            </p>
            <p className="mb-4">
              <strong>7.4</strong> When making a subscription, the Subscriber chooses the types of Services desired, the type and duration of the subscription, as well as the payment method.
            </p>
            <p className="mb-4">
              <strong>7.5</strong> By subscribing via the Website or App, the Subscriber undertakes to:
            </p>
            <p className="mb-4">
              <strong>7.5.1</strong> Not submit any false or fraudulent order/subscription;
            </p>
            <p className="mb-4">
              <strong>7.5.2</strong> Not misuse the Website or App by, inter alia, intentionally introducing malware or any other harmful or damaging technology (including web scraping).
            </p>
            <p className="mb-4">
              <strong>7.6</strong> Failure to comply with the above may result in the commission of a criminal offense, under the terms of the applicable legislation in force, without prejudice to the immediate cancellation of permission to use the Website or App.
            </p>
            <p className="mb-4">
              <strong>7.7</strong> After reading these Terms and Conditions, the Subscriber confirms to have read, understood and accepted them.
            </p>
            <p className="mb-4">
              <strong>7.8</strong> The Contract is deemed to be concluded with the confirmation of the subscription, however it will be automatically terminated if payment has not been made via Website or App.
            </p>
            <p className="mb-4">
              <strong>7.9</strong> The Contract is concluded in English.
            </p>
            <p className="mb-4">
              <strong>7.10</strong> Once you have made and completed your subscription, you will receive an email accusing the receipt of your subscription, as well as the details and description of the Service subscribed to, the price, the duration of the subscription and paying method.
            </p>
            <p className="mb-4">
              <strong>7.11</strong> The data recorded by ERAKULIS® constitutes proof of all the transactions carried out between ERAKULIS® and the Subscriber. ERAKULIS® archives the electronic document formalizing the Contract and keeps it accessible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Free Trials</h2>
            <p className="mb-4">
              <strong>8.1</strong> We may make available free trials of our Services or any other promotional offers ("Free Trial").
            </p>
            <p className="mb-4">
              <strong>8.2</strong> The Free Trial gives you access to our Services for a limited period of time, as specifically detailed when you sign up for the offer.
            </p>
            <p className="mb-4">
              <strong>8.3</strong> The Subscriber will not be charged any subscription fees until the Free Trial period ends.
            </p>
            <p className="mb-4">
              <strong>8.4</strong> The charges incurred are final and non-refundable, except at our discretion and in accordance with the rules specifically governing each subscription plan.
            </p>
            <p className="mb-4">
              <strong>8.5</strong> Depending on the applicable Services, the Subscriber may lose access as soon as they cancel the Free Trial or at the end of the same period, and it will not be possible to resume it, even if it has not been used for the full period of the offer.
            </p>
            <p className="mb-4">
              <strong>8.6</strong> ERAKULIS® does not guarantee that all the features and content of the various Services will remain available for the duration of the Free Trial.
            </p>
            <p className="mb-4">
              <strong>8.7</strong> To the extent permitted by applicable laws, ERAKULIS® reserves the right, in its absolute discretion, to modify or terminate any free trial offer, User's access to the Services during the free trial, or any of these terms without notice and with no liability.
            </p>
            <p className="mb-4">
              <strong>8.8</strong> The Subscriber may not sign up for more than one Free Trial of each subscription plan at the same time, and ERAKULIS® reserves the right to limit the Subscriber's ability to take advantage of several Free Trials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Price and payment</h2>
            <p className="mb-4">
              <strong>9.1</strong> The Subscription fees can be found on the Website and in the App.
            </p>
            <p className="mb-4">
              <strong>9.2</strong> To the maximum extent permitted by applicable laws, ERAKULIS® may change the subscription fees at any time. ERAKULIS® will give Users reasonable notice of any pricing changes by posting the new prices on the Website/App or by sending an e-mail notification in case of subscriptions in force. In this latter case the new prices will only be applicable to the next subscription period and the User may always cancel the renewal of the subscription via the billing platform in which the subscription was purchased, on Website or App. If you do not wish to pay the new fees, you can cancel the applicable subscription prior to the change going into effect.
            </p>
            <p className="mb-4">
              <strong>9.3</strong> The amount of the payment corresponding to the subscriptions is due in automatically renewable periodic installments (e.g. if the subscription is monthly, the amount is due monthly).
            </p>
            <p className="mb-4">
              <strong>9.4</strong> By purchasing any subscription plan on the Website/App, the Subscriber agrees and accepts to pay for it using a valid payment method available on the Website/App.
            </p>
            <p className="mb-4">
              <strong>9.5</strong> The Subscriber will have access to the payment methods available on the Website, including, but not limited to debit or credit card (Visa, Mastercard and American Express);
            </p>
            <p className="mb-4">
              <strong>9.6</strong> The Subscriber will have access in the App to the payment methods provided by digital distribution services for mobile applications.
            </p>
            <p className="mb-4">
              <strong>9.7</strong> All costs identified and related to the services are in euros (EUR), unless otherwise indicated.
            </p>
            <p className="mb-4">
              <strong>9.8</strong> The Subscriber acknowledges and accepts that prices may vary depending on the type of subscription plan subscribed to, as well as the country in which it is established.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Renewal and Cancelation of Subscription</h2>
            <p className="mb-4">
              <strong>10.1</strong> By purchasing a certain subscription, the user agrees that this subscription may be automatically renewed. The subscription is automatically renewed, for the same period as the fee-based subscription plan that was initially chosen (i.e., a month or a year, depending on the initial option selected at the time of purchase).
            </p>
            <p className="mb-4">
              <strong>10.2</strong> The renewal rate will be no more than the rate for the immediately prior subscription period, excluding any promotional pricing, unless we notify you of a rate change prior to your auto-renewal.
            </p>
            <p className="mb-4">
              <strong>10.3</strong> The Subscriber acknowledges and accepts that ERAKULIS® is authorized, for each period of time during which the subscription is active, to charge the same credit card, or other payment method used to pay the initial subscription, for the periodic subscription amount in force. In case your chosen payment method expires you will be notified via email to update your payment method to ensure uninterrupted access to ERAKULIS® Services.
            </p>
            <p className="mb-4">
              <strong>10.4</strong> The Services and User's rights to use them expire at the end of the paid period of subscription. If the User does not pay the fees or charges due, ERAKULIS® may make reasonable efforts to notify the User and resolve the issue; however, ERAKULIS® reserves the right to disable or terminate User's access to the Services (and may do so without notice).
            </p>
            <p className="mb-4">
              <strong>10.5</strong> The subscription payment amount will continue to be charged automatically, to the same payment method provided by the Subscriber, until it is canceled.
            </p>
            <p className="mb-4">
              <strong>10.6</strong> To avoid renewing the subscription, the Subscriber must cancel it via the billing platform in which the subscription was purchased on Website or App. After you cancel the subscription, ERAKULIS® will send you an email notification confirming the cancellation.
            </p>
            <p className="mb-4">
              <strong>10.7</strong> SUBSCRIBERS MUST CANCEL THEIR SUBSCRIPTION BEFORE IT IS RENEWED IN ORDER TO AVOID BEING CHARGED FOR THE NEXT PERIODIC SUBSCRIPTION.
            </p>
            <p className="mb-4">
              <strong>10.8</strong> For more information on canceling your subscription, please consult the respective information articles for the iOS, ANDROID operating systems and our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Right of withdrawal</h2>
            <p className="mb-4">
              <strong>11.1</strong> In accordance with the applicable legislation, the Consumer may terminate the contract for the provision of Services within 14 (fourteen) days from the date of its conclusion (please see 7.8 of the Terms and Conditions), without any compensation being due and without having to state the reason. This applies to consumers based in the EEA or Switzerland.
            </p>
            <p className="mb-4">
              <strong>11.2</strong> In order to exercise their right of withdrawal, the Consumer must notify us by letter or email sent to Rua de Gondarém, n.º 867, Freguesia de Aldoar, Foz do Douro e Nevogilde, 4150-374 Porto, or <a href="mailto:support@erakulis.com" className="text-primary hover:underline">support@erakulis.com</a>, respectively, of their decision to withdraw from this contract by means of an unequivocal statement. You can use the model withdrawal form provided at the end of these Terms and Conditions, but this is not mandatory.
            </p>
            <p className="mb-4">
              <strong>11.3</strong> Under the terms of the applicable legislation, it is up to the Consumer to prove that they have exercised their right of withdrawal, so it is recommended that the unequivocal statement be made in writing.
            </p>
            <p className="mb-4">
              <strong>11.4</strong> In order for the withdrawal period to be respected, it is sufficient for your communication regarding the exercise of the right of withdrawal to be sent to ERAKULIS® before the expiry of the withdrawal period.
            </p>
            <p className="mb-4">
              <strong>11.5</strong> The Subscriber who terminates the contract must refrain from using the Services provided by ERAKULIS® and from making them available to third parties.
            </p>
            <p className="mb-4">
              <strong>11.6</strong> In the event of termination of the contract, the Consumer will be refunded the payments made. However, by signing up for the Services, that are provided on a continuous basis (such as subscriptions to the App) the Consumer expressly requests and consents to an immediate supply of such Services. Therefore, if the Consumer exercises the right of withdrawal, we will deduct from the Consumer's refund an amount that is in proportion to the Services provided before the Consumer communicated to us the withdrawal from the contract.
            </p>
            <p className="mb-4">
              <strong>11.7</strong> The refund will be made within 14 days of the date on which we are informed of your decision to terminate the contract. The refund will be made using the same payment method. In any case, you will not incur any costs as a result of such reimbursement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. International Use</h2>
            <p className="mb-4">
              <strong>12.1</strong> ERAKULIS® does not warrant that the Services are accessible, suitable, or legally available for use in the User's jurisdiction.
            </p>
            <p className="mb-4">
              <strong>12.2</strong> Accessing and using the Services is prohibited in regions where such actions are unlawful. The Users engage with the Services voluntarily and bear responsibility for adhering to local laws when in a certain region.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Personal Data protection and Privacy</h2>
            <p className="mb-4">
              <strong>13.1</strong> Users are advised to read and analyze the Privacy Policy and Cookie Policy, which are an integral part of these Terms and Conditions, to understand how the Website collects and uses their personal data and the respective purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Industrial and Intellectual Property Rights</h2>
            <p className="mb-4">
              <strong>14.1</strong> These Terms and Conditions (or access to the Website/App) do not transfer any intellectual or industrial property rights over the ERAKULIS® Website/App or any of its integral elements. Users are expressly prohibited from reproducing, transforming, distributing, publicly communicating, making available, extracting, reusing, modifying the source code, reverse engineering, decompiling, resending, or using in any way or procedure any of these elements, except as permitted or authorized by the corresponding rights holder.
            </p>
            <p className="mb-4">
              <strong>14.2</strong> However, Users may view and make a temporary private copy of the content for their exclusive, personal, and private use, provided it is not done for the purpose of conducting commercial or professional activities. Users should refrain from obtaining or attempting to obtain content through means or procedures other than those made available, indicated for the purpose, or commonly used on the Internet (and, in the latter case, do not pose a risk of damage or disabling of the Website/App).
            </p>
            <p className="mb-4">
              <strong>14.3</strong> Users must respect all intellectual and industrial property rights related to the Website/App, owned by ERAKULIS®, at all times.
            </p>
            <p className="mb-4">
              <strong>14.4</strong> You acknowledge that copyrights related to all texts, images, logos, content, data, materials and other information published on the Website/App and other content that Users view or read on the Service and industrial property rights, including trademarks owned by ERAKULIS® and other distinctive signs, unless otherwise indicated, are owned by ERAKULIS®. Any activity that includes saving, copying, reproducing, or forwarding content, even excerpts, is only permitted with the written permission of ERAKULIS®.
            </p>
            <p className="mb-4">
              <strong>14.5</strong> The information that Users submit to ERAKULIS® as part of their registration, and any data, text, and other material that Users may submit or post to the App ("User Content") remain their intellectual property, and ERAKULIS® does not claim any ownership of the copyright or other proprietary rights in such registration information and the User Content. Notwithstanding the foregoing, User agrees that ERAKULIS® may retain copies of all registration information and the User Content and use such information and the User Content as reasonably necessary for its operation of the Service and as described in these Terms and Conditions and in the Privacy Policy.
            </p>
            <p className="mb-4">
              <strong>14.6</strong> Under these Terms and Conditions, ERAKULIS® grants you a non-transferable license to use the Services and install the App solely for your personal, non-commercial purposes.
            </p>
            <p className="mb-4">
              <strong>14.7</strong> ERAKULIS® acknowledges that certain trademarks, service marks, and logos (collectively referred to as "Trademarks") used on the Website and App are the property of their respective owners. ERAKULIS® has obtained lawful authorization from the owners of these Trademarks to use them on our Website and App. Any unauthorized use of these Trademarks is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Third Party Websites and App Stores</h2>
            <p className="mb-4">
              <strong>15.1</strong> The App is available on the Apple App Store and on the Google Play Store as "Erakulis". You acknowledge that the availability of the App is dependent on these app stores.
            </p>
            <p className="mb-4">
              <strong>15.2</strong> You agree to pay all fees charged by the Apple App Store and the Google Play Store in connection with the App. You agree that your license to use the App is conditioned upon your compliance with the terms of use/service and policies of these app stores. Furthermore you acknowledge that these app stores have the right to enforce these Terms and Conditions.
            </p>
            <p className="mb-4">
              <strong>15.3</strong> Subscriptions may be purchased via Apple App Store and the Google Play Store. You acknowledge that when you purchase a subscription via these app stores, you are subject to such app store's refund policies. This means that if you want a refund, you will have to contact an app store support as we cannot refund you.
            </p>
            <p className="mb-4">
              <strong>15.4</strong> The provision of links ("Links") on the Website/App to third-party websites or content and advertisements provided by third parties is included solely for informative purposes and User convenience. ERAKULIS® does not control other websites and is therefore not responsible for them or their content or products (including but not limited to social media references). ERAKULIS® is not responsible for any damages or losses resulting from User's use of other websites or regarding the processing of personal data during internet browsing operations. Accessing any other websites through links on the Website will be the sole responsibility and risk of the User. When you link to a third party site, the applicable service provider's terms and policies, including privacy and data gathering practices govern. The User should therefore pay particular attention when connecting to other websites through links on the Website and carefully read their respective terms, conditions, and privacy policies.
            </p>
            <p className="mb-4">
              <strong>15.5</strong> The User acknowledges and agrees that ERAKULIS® is not directly or indirectly responsible for any damage or loss caused or alleged to be caused by or in connection with the use or reliance on any content, goods, or services available through any of these websites or services.
            </p>
            <p className="mb-4">
              <strong>15.6</strong> In the App or on the Website we may include links to the websites of third parties, regardless of whether or not there is a formal contractual link. ERAKULIS® shall not be a party to any contract it may enter into with such third parties, nor shall it be liable for the same. This disclaimer by ERAKULIS® does not limit or affect in any way the legal or contractual rights it has over the third party in question.
            </p>
            <p className="mb-4">
              <strong>15.7</strong> No authorization is granted to the User to establish any use of deep links (i.e., links to subpages) from any other website to any part of this Website/App or to place any content from this Website within an information field without prior written authorization from ERAKULIS®.
            </p>
            <p className="mb-4">
              <strong>15.8</strong> You hereby release ERAKULIS® from damages, rights, claims, and actions of any kind including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from any interactions with or conduct of any App Store, any other Service users, or any Third Party Ads.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Indemnification</h2>
            <p className="mb-4">
              <strong>16.1</strong> To the maximum extent permitted by applicable law, you agree to indemnify, defend and hold harmless ERAKULIS® and our subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of (i) your breach of these Terms and Conditions or the documents they incorporate by reference, (ii) your violation of any law or the rights of a third-party, or (iii) your use of the Services. We reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us under these Terms and Conditions, and you agree to cooperate with our defense of such claims.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. Governing Law</h2>
            <p className="mb-4">
              <strong>17.1</strong> These Terms and Conditions that regulate the relationship between you and ERAKULIS® for the provision of the Services within the scope of the Website or the App, and all claims or disputes arising therefrom or relating to their object or conclusion (including non-contractual disputes), are subject to Portuguese law and shall be interpreted in accordance with the Portuguese law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. Dispute Resolution</h2>
            <p className="mb-4">
              <strong>18.1</strong> Any dispute or litigation arising from the application, interpretation, or execution of these Terms and Conditions, when it cannot be resolved by an amicable and negotiated agreement of the parties, shall be resolved by the Judicial Courts of Porto, with express waiver of any others, without regard to conflicts of law principles.
            </p>
            <p className="mb-4">
              <strong>18.2</strong> If you are a consumer resident in Portugal:
            </p>
            <p className="mb-4">
              <strong>18.2.1</strong> You may freely obtain information on the possibility of resorting to Alternative Dispute Resolution ("ADR", available at www.consumidor.pt).
            </p>
            <p className="mb-4">
              <strong>18.2.2</strong> ERAKULIS® informs that Consumer disputes of low economic value (up to 5,000 euros) are subject to necessary arbitration or mediation when, at the express option of the consumers, they are submitted to an arbitration court attached to legally authorized consumer dispute arbitration centers in Portugal. The list of Alternative Dispute Resolution Entities available under article 17 of Law no. 144/2015, of September 8, in its updated version, can be consulted at any time on the Consumer Portal, via the website www.consumidor.pt.
            </p>
            <p className="mb-4">
              <strong>18.3</strong> If the Subscriber is a consumer resident of the European Union:
            </p>
            <p className="mb-4">
              <strong>18.3.1</strong> Nothing in these Terms and Conditions shall deprive the User of the protection afforded to consumers by the mandatory rules of law of the country in which you live.
            </p>
            <p className="mb-4">
              <strong>18.3.2</strong> Consumers can also use the European Commission's online alternative dispute resolution platform, accessible via the following link: <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>.
            </p>
            <p className="mb-4">
              <strong>18.3.3</strong> The User may bring any dispute which may arise under these Terms and Conditions to the competent court of the User's country of habitual residence if this country of habitual residence is an EU Member State, which courts are competent to settle any of such a dispute. ERAKULIS® shall bring any dispute which may arise under these Terms and Conditions to the competent court of the User's country of habitual residence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">19. General Provisions</h2>
            <p className="mb-4">
              <strong>19.1</strong> The invalidity or ineffectiveness of any of the provisions of these Terms and Conditions shall not affect the validity of the remaining provisions, and ERAKULIS® and the User shall remain fully bound to comply with them.
            </p>
            <p className="mb-4">
              <strong>19.2</strong> ERAKULIS® reserves the right to revise and change these Terms and Conditions periodically by publishing them on the Website. The User acknowledges and accepts this possibility. Therefore, it is the User's responsibility to read these terms each time they access the Website.
            </p>
            <p className="mb-4">
              <strong>19.3</strong> The Subscriber is bound by the Terms and Conditions in force at the time they subscribe to Services from us, unless the law or a competent authority requires these conditions to be changed (in which case the necessary changes will apply to orders previously placed).
            </p>
            <p className="mb-4">
              <strong>19.4</strong> The Website and App are presented on an "as is" and "as available" basis, and we make no warranty of any kind, express or implied, with respect thereto. We do not warrant that the App or the Website will meet your requirements, nor that they will be free from interruptions or errors, nor that the App or the server on which it is hosted will be completely free from faults, interruptions or computer viruses.
            </p>
            <p className="mb-4">
              <strong>19.5</strong> Any information conveyed through the Services is regarded as electronic communication. When interacting with us on the Services or using other electronic means like email, your communication is deemed electronic. You consent to electronic communication with us, acknowledging that such communications, including notices, disclosures, agreements, and others provided to you electronically, hold the same weight as written communications, carrying equivalent force and effect as if physically signed. Additionally, you recognize and agree that by selecting buttons labeled "SUBMIT," "CONTINUE," "REGISTER," "I AGREE," or similar links/buttons, you are providing a legally binding electronic signature and entering into a legally binding contract. Your electronic submissions confirm your acceptance and intention to be bound by these Terms and Conditions. By accepting, you also affirm your agreement to the use of electronic signatures, contracts, orders, and other records, as well as to the electronic delivery of notices, policies, and records of transactions initiated or completed through the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">20. Contact Center</h2>
            <p className="mb-4">
              <strong>20.1</strong> If the User has any questions about these Terms and Conditions or any feedback about the Website, the User can contact ERAKULIS® via e-mail at <a href="mailto:support@erakulis.com" className="text-primary hover:underline">support@erakulis.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Annex I - Free resolution form</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="mb-4 italic">
                (you should only complete and return this form if you wish to terminate the contract without having to provide any justification, within 14 days of receiving the Services)
              </p>
              <p className="mb-4">
                <strong>To:</strong> ERAKULIS, LDA., Rua de Gondarém, n.º 867, parish of Aldoar, Foz do Douro and Nevogilde, 4150-374 Porto, email: <a href="mailto:support@erakulis.com" className="text-primary hover:underline">support@erakulis.com</a>
              </p>
              <p className="mb-4">I hereby give notice that I am terminating my contract for the following service:</p>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <strong>Service:</strong> ________________________________
                  </div>
                  <div>
                    <strong>Requested at:</strong> ____________________________
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <strong>Received at:</strong> ____________________________
                  </div>
                  <div>
                    <strong>Consumer's name:</strong> _______________________
                  </div>
                </div>
                
                <div>
                  <strong>Consumer's address:</strong> ___________________________________________________
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <strong>Date:</strong> _____ / _____ / _____
                  </div>
                  <div>
                    <strong>Signature (only if this form is notified on paper / sent by post mail):</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditionsPage;