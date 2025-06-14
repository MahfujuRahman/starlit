//app layout
import Layout from "../Layouts/Layout.vue";
//Dashboard
import Dashboard from "../Management/Dashboard/Dashboard.vue";
//SettingsRoutes
import SettingsRoutes from "../Management/Settings/setup/routes.js";
//routes
import BlogRoutes from '../Management/BlogManagement/Blog/setup/routes.js';
import BlogCategoryRoutes from '../Management/BlogManagement/BlogCategory/setup/routes.js';
import ContactRoutes from '../Management/ContactManagement/Contact/setup/routes.js';
import VideoGallaryRoutes from '../Management/VideoGallaryManagement/VideoGallary/setup/routes.js';
import ImageGallaryRoutes from '../Management/ImageGallaryManagement/ImageGallary/setup/routes.js';
import NewsletterRoutes from '../Management/NewsletterManagement/Newsletter/setup/routes.js';
import CustomPageRoutes from '../Management/CustomPageManagement/CustomPage/setup/routes.js';
import TestimonialRoutes from '../Management/TestimonialManagement/Testimonial/setup/routes.js';
import PropertyRoutes from '../Management/PropertyManagement/Property/setup/routes.js';
import PropertyCategoryRoutes from '../Management/PropertyManagement/PropertyCategory/setup/routes.js';
import PropertyGroupRoutes from '../Management/PropertyManagement/PropertyGroup/setup/routes.js';
import OurServiceRoutes from '../Management/OurServiceManagement/OurService/setup/routes.js';
import TodaySellsRoutes from '../Management/TodaySellsManagement/TodaySells/setup/routes.js';
import OurTeamRoutes from '../Management/OurTeamManagement/OurTeam/setup/routes.js';
import AtAGlanceRoutes from '../Management/AtAGlanceManagement/AtAGlance/setup/routes.js';
import AboutUsRoutes from '../Management/AboutUsManagement/AboutUs/setup/routes.js';
import BannerRoutes from '../Management/BannerManagement/Banner/setup/routes.js';



import UserRoutes from '../Management/UserManagement/User/setup/routes.js';





const routes = {
    path: '',
    component: Layout,
    children: [
        {
            path: 'dashboard',
            component: Dashboard,
            name: 'adminDashboard',
        },
        //management routes
        BlogRoutes,
        BlogCategoryRoutes,
        ContactRoutes,
        VideoGallaryRoutes,
        ImageGallaryRoutes,
        NewsletterRoutes,
        CustomPageRoutes,
        TestimonialRoutes,
        PropertyRoutes,
        PropertyCategoryRoutes,
        PropertyGroupRoutes,
        OurServiceRoutes,
        TodaySellsRoutes,
        OurTeamRoutes,
        AtAGlanceRoutes,
        AboutUsRoutes,
        BannerRoutes,
      
        UserRoutes,
        //settings
        SettingsRoutes,
    ],
};

export default routes;

