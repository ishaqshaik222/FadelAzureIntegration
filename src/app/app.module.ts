import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { StickyNavModule } from 'ng2-sticky-nav';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from "ngx-accordion";
import { LightgalleryModule } from 'lightgallery/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageOneComponent } from './components/pages/home-page-one/home-page-one.component';
import { HomePageTwoComponent } from './components/pages/home-page-two/home-page-two.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeoneAboutComponent } from './components/pages/home-page-one/homeone-about/homeone-about.component';
import { HomeoneMainBannerComponent } from './components/pages/home-page-one/homeone-main-banner/homeone-main-banner.component';
import { HeaderStyleOneComponent } from './components/common/header-style-one/header-style-one.component';
import { CategoriesStyleOneComponent } from './components/common/categories-style-one/categories-style-one.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HomeoneCoursesComponent } from './components/pages/home-page-one/homeone-courses/homeone-courses.component';
import { PartnerStyleOneComponent } from './components/common/partner-style-one/partner-style-one.component';
import { InstructorsStyleOneComponent } from './components/common/instructors-style-one/instructors-style-one.component';
import { BecomeInstructorPartnerComponent } from './components/common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { HeaderStyleTwoComponent } from './components/common/header-style-two/header-style-two.component';
import { HometwoMainBannerComponent } from './components/pages/home-page-two/hometwo-main-banner/hometwo-main-banner.component';
import { HometwoAboutComponent } from './components/pages/home-page-two/hometwo-about/hometwo-about.component';
import { HometwoCoursesComponent } from './components/pages/home-page-two/hometwo-courses/hometwo-courses.component';
import { OurMissionComponent } from './components/common/our-mission/our-mission.component';
import { InstructorsStyleTwoComponent } from './components/common/instructors-style-two/instructors-style-two.component';
import { WebinarCountdownComponent } from './components/common/webinar-countdown/webinar-countdown.component';
import { StudentsFeedbackFormComponent } from './components/common/students-feedback-form/students-feedback-form.component';
import { HomePageThreeComponent } from './components/pages/home-page-three/home-page-three.component';
import { HomePageFourComponent } from './components/pages/home-page-four/home-page-four.component';
import { HomePageFiveComponent } from './components/pages/home-page-five/home-page-five.component';
import { HomePageSixComponent } from './components/pages/home-page-six/home-page-six.component';
import { HomePageSevenComponent } from './components/pages/home-page-seven/home-page-seven.component';
import { PartnerStyleTwoComponent } from './components/common/partner-style-two/partner-style-two.component';
import { OfferComponent } from './components/common/offer/offer.component';
import { CategoriesStyleTwoComponent } from './components/common/categories-style-two/categories-style-two.component';
import { HomethreeCoursesComponent } from './components/pages/home-page-three/homethree-courses/homethree-courses.component';
import { HomethreeAboutComponent } from './components/pages/home-page-three/homethree-about/homethree-about.component';
import { FeedbackFormComponent } from './components/common/feedback-form/feedback-form.component';
import { HomethreeMainBannerComponent } from './components/pages/home-page-three/homethree-main-banner/homethree-main-banner.component';
import { HeaderStyleThreeComponent } from './components/common/header-style-three/header-style-three.component';
import { HomefourMainBannerComponent } from './components/pages/home-page-four/homefour-main-banner/homefour-main-banner.component';
import { HomefourCoursesComponent } from './components/pages/home-page-four/homefour-courses/homefour-courses.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { HomefiveCoursesComponent } from './components/pages/home-page-five/homefive-courses/homefive-courses.component';
import { HomefiveMainBannerComponent } from './components/pages/home-page-five/homefive-main-banner/homefive-main-banner.component';
import { InstructorsStyleThreeComponent } from './components/common/instructors-style-three/instructors-style-three.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HomesixCoursesComponent } from './components/pages/home-page-six/homesix-courses/homesix-courses.component';
import { CategoriesStyleThreeComponent } from './components/common/categories-style-three/categories-style-three.component';
import { HomesixMainBannerComponent } from './components/pages/home-page-six/homesix-main-banner/homesix-main-banner.component';
import { HeaderStyleFourComponent } from './components/common/header-style-four/header-style-four.component';
import { HomesevenMainBannerComponent } from './components/pages/home-page-seven/homeseven-main-banner/homeseven-main-banner.component';
import { HomesevenCoursesComponent } from './components/pages/home-page-seven/homeseven-courses/homeseven-courses.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { OurStoryComponent } from './components/common/our-story/our-story.component';
import { OurValuesComponent } from './components/common/our-values/our-values.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsPageTwoComponent } from './components/pages/instructors-page-two/instructors-page-two.component';
import { InstructorsPageThreeComponent } from './components/pages/instructors-page-three/instructors-page-three.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogFullWidthPageComponent } from './components/pages/blog-full-width-page/blog-full-width-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ShopGridPageComponent } from './components/pages/shop-grid-page/shop-grid-page.component';
import { ShopFullWidthPageComponent } from './components/pages/shop-full-width-page/shop-full-width-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CategoryPageOneComponent } from './components/pages/category-page-one/category-page-one.component';
import { CategoryPageTwoComponent } from './components/pages/category-page-two/category-page-two.component';
import { CategoryPageThreeComponent } from './components/pages/category-page-three/category-page-three.component';
import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
import { CoursesGridStyleOneColumnsTwoPageComponent } from './components/pages/courses-grid-style-one-columns-two-page/courses-grid-style-one-columns-two-page.component';
import { CoursesGridStyleOneColumnsThreePageComponent } from './components/pages/courses-grid-style-one-columns-three-page/courses-grid-style-one-columns-three-page.component';
import { CoursesGridStyleOneColumnsFourPageComponent } from './components/pages/courses-grid-style-one-columns-four-page/courses-grid-style-one-columns-four-page.component';
import { CoursesGridStyleTwoColumnsTwoPageComponent } from './components/pages/courses-grid-style-two-columns-two-page/courses-grid-style-two-columns-two-page.component';
import { CoursesGridStyleTwoColumnsThreePageComponent } from './components/pages/courses-grid-style-two-columns-three-page/courses-grid-style-two-columns-three-page.component';
import { CoursesGridStyleTwoColumnsFourPageComponent } from './components/pages/courses-grid-style-two-columns-four-page/courses-grid-style-two-columns-four-page.component';
import { CoursesGridStyleThreeColumnsTwoPageComponent } from './components/pages/courses-grid-style-three-columns-two-page/courses-grid-style-three-columns-two-page.component';
import { CoursesGridStyleThreeColumnsThreePageComponent } from './components/pages/courses-grid-style-three-columns-three-page/courses-grid-style-three-columns-three-page.component';
import { CoursesGridStyleThreeColumnsFourPageComponent } from './components/pages/courses-grid-style-three-columns-four-page/courses-grid-style-three-columns-four-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { MyDashboardPageComponent } from './components/pages/my-dashboard-page/my-dashboard-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { DownloadsPageComponent } from './components/pages/downloads-page/downloads-page.component';
import { EditAddressPageComponent } from './components/pages/edit-address-page/edit-address-page.component';
import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';
import { EditBillingAddressPageComponent } from './components/pages/edit-billing-address-page/edit-billing-address-page.component';
import { EditShippingAddressPageComponent } from './components/pages/edit-shipping-address-page/edit-shipping-address-page.component';
import { HomePageEightComponent } from './components/pages/home-page-eight/home-page-eight.component';
import { PremiumAccessComponent } from './components/common/premium-access/premium-access.component';
import { HomeeightBlogComponent } from './components/pages/home-page-eight/homeeight-blog/homeeight-blog.component';
import { HomeeightEventsComponent } from './components/pages/home-page-eight/homeeight-events/homeeight-events.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { FunfactsFeedbackComponent } from './components/common/funfacts-feedback/funfacts-feedback.component';
import { HomeeightCoursesComponent } from './components/pages/home-page-eight/homeeight-courses/homeeight-courses.component';
import { FeaturesStyleTwoComponent } from './components/common/features-style-two/features-style-two.component';
import { HomeeightAboutComponent } from './components/pages/home-page-eight/homeeight-about/homeeight-about.component';
import { HomeeightMainBannerComponent } from './components/pages/home-page-eight/homeeight-main-banner/homeeight-main-banner.component';
import { ServicesComponent } from './components/common/services/services.component';
import { HeaderStyleFiveComponent } from './components/common/header-style-five/header-style-five.component';
import { HomePageNineComponent } from './components/pages/home-page-nine/home-page-nine.component';
import { HomenineMainBannerComponent } from './components/pages/home-page-nine/homenine-main-banner/homenine-main-banner.component';
import { HealthExperienceComponent } from './components/common/health-experience/health-experience.component';
import { HealthProgramComponent } from './components/common/health-program/health-program.component';
import { HomenineCoursesComponent } from './components/pages/home-page-nine/homenine-courses/homenine-courses.component';
import { HealthQuoteComponent } from './components/common/health-quote/health-quote.component';
import { HomenineEventsComponent } from './components/pages/home-page-nine/homenine-events/homenine-events.component';
import { HomenineBlogComponent } from './components/pages/home-page-nine/homenine-blog/homenine-blog.component';
import { HealthSubscribeComponent } from './components/common/health-subscribe/health-subscribe.component';
import { HomePageTenComponent } from './components/pages/home-page-ten/home-page-ten.component';
import { HomePageElevenComponent } from './components/pages/home-page-eleven/home-page-eleven.component';
import { HomePageTwelveComponent } from './components/pages/home-page-twelve/home-page-twelve.component';
import { HomePageThirteenComponent } from './components/pages/home-page-thirteen/home-page-thirteen.component';
import { HomePageFourteenComponent } from './components/pages/home-page-fourteen/home-page-fourteen.component';
import { LanguageSubscribeComponent } from './components/common/language-subscribe/language-subscribe.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { HowToApplyComponent } from './components/common/how-to-apply/how-to-apply.component';
import { StudentsFeedbackComponent } from './components/common/students-feedback/students-feedback.component';
import { FunfactsStyleTwoComponent } from './components/common/funfacts-style-two/funfacts-style-two.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { HometenMainBannerComponent } from './components/pages/home-page-ten/hometen-main-banner/hometen-main-banner.component';
import { LanguageCategoryComponent } from './components/common/language-category/language-category.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { HomeelevenBlogComponent } from './components/pages/home-page-eleven/homeeleven-blog/homeeleven-blog.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { GymTrainerComponent } from './components/common/gym-trainer/gym-trainer.component';
import { GymFeedbackComponent } from './components/common/gym-feedback/gym-feedback.component';
import { FunfactsStyleThreeComponent } from './components/common/funfacts-style-three/funfacts-style-three.component';
import { HomeelevenCoursesComponent } from './components/pages/home-page-eleven/homeeleven-courses/homeeleven-courses.component';
import { WhyChooseUsTwoComponent } from './components/common/why-choose-us-two/why-choose-us-two.component';
import { GymFeaturesComponent } from './components/common/gym-features/gym-features.component';
import { HomeelevenMainBannerComponent } from './components/pages/home-page-eleven/homeeleven-main-banner/homeeleven-main-banner.component';
import { HeaderStyleSixComponent } from './components/common/header-style-six/header-style-six.component';
import { HometwelveBlogComponent } from './components/pages/home-page-twelve/hometwelve-blog/hometwelve-blog.component';
import { DiscoverEdnuvComponent } from './components/common/discover-ednuv/discover-ednuv.component';
import { InstructorsStyleFourComponent } from './components/common/instructors-style-four/instructors-style-four.component';
import { OurGrowthComponent } from './components/common/our-growth/our-growth.component';
import { HometwelveCoursesComponent } from './components/pages/home-page-twelve/hometwelve-courses/hometwelve-courses.component';
import { HometwelveAboutComponent } from './components/pages/home-page-twelve/hometwelve-about/hometwelve-about.component';
import { TrendingCategoriesComponent } from './components/common/trending-categories/trending-categories.component';
import { HometwelvePopularCoursesComponent } from './components/pages/home-page-twelve/hometwelve-popular-courses/hometwelve-popular-courses.component';
import { HometwelveMainBannerComponent } from './components/pages/home-page-twelve/hometwelve-main-banner/hometwelve-main-banner.component';
import { HeaderStyleSevenComponent } from './components/common/header-style-seven/header-style-seven.component';
import { HappyStudentsFeedbackComponent } from './components/common/happy-students-feedback/happy-students-feedback.component';
import { BecomePartnerTeacherComponent } from './components/common/become-partner-teacher/become-partner-teacher.component';
import { MakeConnectionsComponent } from './components/common/make-connections/make-connections.component';
import { HomethirteenCoursesComponent } from './components/pages/home-page-thirteen/homethirteen-courses/homethirteen-courses.component';
import { HomethirteenAboutComponent } from './components/pages/home-page-thirteen/homethirteen-about/homethirteen-about.component';
import { FeaturesStyeThreeComponent } from './components/common/features-stye-three/features-stye-three.component';
import { HomethirteenPopularCoursesComponent } from './components/pages/home-page-thirteen/homethirteen-popular-courses/homethirteen-popular-courses.component';
import { HomethirteenMainBannerComponent } from './components/pages/home-page-thirteen/homethirteen-main-banner/homethirteen-main-banner.component';
import { StartFreeCoursesComponent } from './components/common/start-free-courses/start-free-courses.component';
import { FreeTrialTwoComponent } from './components/common/free-trial-two/free-trial-two.component';
import { HomefourteenMainBannerComponent } from './components/pages/home-page-fourteen/homefourteen-main-banner/homefourteen-main-banner.component';
import { HomefourteenAboutComponent } from './components/pages/home-page-fourteen/homefourteen-about/homefourteen-about.component';
import { FreeTrialFormComponent } from './components/common/free-trial-form/free-trial-form.component';
import { FunfactsStyleFourComponent } from './components/common/funfacts-style-four/funfacts-style-four.component';
import { environment } from 'src/environments/environment';
import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalGuard, MsalBroadcastService, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';

import { msalConfig } from '../auth-config';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageOneComponent,
    HomePageTwoComponent,
    FooterComponent,
    HomeoneAboutComponent,
    HomeoneMainBannerComponent,
    HeaderStyleOneComponent,
    CategoriesStyleOneComponent,
    FunfactsComponent,
    HomeoneCoursesComponent,
    PartnerStyleOneComponent,
    InstructorsStyleOneComponent,
    BecomeInstructorPartnerComponent,
    FeedbackStyleOneComponent,
    BlogComponent,
    HeaderStyleTwoComponent,
    HometwoMainBannerComponent,
    HometwoAboutComponent,
    HometwoCoursesComponent,
    OurMissionComponent,
    InstructorsStyleTwoComponent,
    WebinarCountdownComponent,
    StudentsFeedbackFormComponent,
    HomePageThreeComponent,
    HomePageFourComponent,
    HomePageFiveComponent,
    HomePageSixComponent,
    HomePageSevenComponent,
    PartnerStyleTwoComponent,
    OfferComponent,
    CategoriesStyleTwoComponent,
    HomethreeCoursesComponent,
    HomethreeAboutComponent,
    FeedbackFormComponent,
    HomethreeMainBannerComponent,
    HeaderStyleThreeComponent,
    HomefourMainBannerComponent,
    HomefourCoursesComponent,
    BoxesComponent,
    FeedbackStyleTwoComponent,
    HomefiveCoursesComponent,
    HomefiveMainBannerComponent,
    InstructorsStyleThreeComponent,
    FeaturesComponent,
    HomesixCoursesComponent,
    CategoriesStyleThreeComponent,
    HomesixMainBannerComponent,
    HeaderStyleFourComponent,
    HomesevenMainBannerComponent,
    HomesevenCoursesComponent,
    HowItWorksComponent,
    AboutPageOneComponent,
    AboutPageTwoComponent,
    OurStoryComponent,
    OurValuesComponent,
    InstructorsPageOneComponent,
    InstructorsPageTwoComponent,
    InstructorsPageThreeComponent,
    InstructorsDetailsPageComponent,
    GalleryPageComponent,
    EventsPageComponent,
    EventsDetailsPageComponent,
    PricingPageComponent,
    FeedbackPageComponent,
    PartnerPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FaqPageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent,
    BlogGridPageComponent,
    BlogRightSidebarPageComponent,
    BlogFullWidthPageComponent,
    BlogDetailsPageComponent,
    ShopGridPageComponent,
    ShopFullWidthPageComponent,
    ProductsDetailsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ContactPageComponent,
    CategoryPageOneComponent,
    CategoryPageTwoComponent,
    CategoryPageThreeComponent,
    CoursesListPageComponent,
    CoursesGridStyleOneColumnsTwoPageComponent,
    CoursesGridStyleOneColumnsThreePageComponent,
    CoursesGridStyleOneColumnsFourPageComponent,
    CoursesGridStyleTwoColumnsTwoPageComponent,
    CoursesGridStyleTwoColumnsThreePageComponent,
    CoursesGridStyleTwoColumnsFourPageComponent,
    CoursesGridStyleThreeColumnsTwoPageComponent,
    CoursesGridStyleThreeColumnsThreePageComponent,
    CoursesGridStyleThreeColumnsFourPageComponent,
    CoursesDetailsPageComponent,
    MyDashboardPageComponent,
    OrdersPageComponent,
    DownloadsPageComponent,
    EditAddressPageComponent,
    EditAccountPageComponent,
    EditBillingAddressPageComponent,
    EditShippingAddressPageComponent,
    HomePageEightComponent,
    PremiumAccessComponent,
    HomeeightBlogComponent,
    HomeeightEventsComponent,
    FaqComponent,
    FunfactsFeedbackComponent,
    HomeeightCoursesComponent,
    FeaturesStyleTwoComponent,
    HomeeightAboutComponent,
    HomeeightMainBannerComponent,
    ServicesComponent,
    HeaderStyleFiveComponent,
    HomePageNineComponent,
    HomenineMainBannerComponent,
    HealthExperienceComponent,
    HealthProgramComponent,
    HomenineCoursesComponent,
    HealthQuoteComponent,
    HomenineEventsComponent,
    HomenineBlogComponent,
    HealthSubscribeComponent,
    HomePageTenComponent,
    HomePageElevenComponent,
    HomePageTwelveComponent,
    HomePageThirteenComponent,
    HomePageFourteenComponent,
    LanguageSubscribeComponent,
    FreeTrialComponent,
    HowToApplyComponent,
    StudentsFeedbackComponent,
    FunfactsStyleTwoComponent,
    WhyChooseUsComponent,
    HometenMainBannerComponent,
    LanguageCategoryComponent,
    GetStartedComponent,
    HomeelevenBlogComponent,
    AppDownloadComponent,
    GymTrainerComponent,
    GymFeedbackComponent,
    FunfactsStyleThreeComponent,
    HomeelevenCoursesComponent,
    WhyChooseUsTwoComponent,
    GymFeaturesComponent,
    HomeelevenMainBannerComponent,
    HeaderStyleSixComponent,
    HometwelveBlogComponent,
    DiscoverEdnuvComponent,
    InstructorsStyleFourComponent,
    OurGrowthComponent,
    HometwelveCoursesComponent,
    HometwelveAboutComponent,
    TrendingCategoriesComponent,
    HometwelvePopularCoursesComponent,
    HometwelveMainBannerComponent,
    HeaderStyleSevenComponent,
    HappyStudentsFeedbackComponent,
    BecomePartnerTeacherComponent,
    MakeConnectionsComponent,
    HomethirteenCoursesComponent,
    HomethirteenAboutComponent,
    FeaturesStyeThreeComponent,
    HomethirteenPopularCoursesComponent,
    HomethirteenMainBannerComponent,
    StartFreeCoursesComponent,
    FreeTrialTwoComponent,
    HomefourteenMainBannerComponent,
    HomefourteenAboutComponent,
    FreeTrialFormComponent,
    FunfactsStyleFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CountUpModule,
    TabsModule,
    NgxScrollTopModule,
    StickyNavModule,
    LightboxModule,
    FormsModule,
    AccordionModule,
    LightgalleryModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [ 
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
      
  
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    }, 
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    DatePipe
  ],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
