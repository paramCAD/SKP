/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    SKP
                    <br />
                    Installations
                  </>
                }
                description="Your Local Handyman at your service."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="If you like any help contact us ASAP. We will do our best to resolve your issue"
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "start with header",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  icon="flip_to_front"
                  title="Email"
                  description="skp.installations@gmail.com"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  icon="flip_to_front"
                  title="Contact & WhatsApp"
                  description="+1 613-501-2973"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <FilledInfoCard                   
                                // color="info"
                                icon="flip_to_front"
                                title="Address"
                                description="Ottawa K4R 0E2"
                                // action={{
                                //   type: "external",
                                //   route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                                //   label: "Let's start",
                                // }}
                              />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  icon="flip_to_front"
                  title="Serving"
                  description="Carp,  Embrun,  Rockland,  Kemptville,  Carleton Place,  Kanata,  Barrhaven,  Russell,  Gatineau, QC, Ottawa "
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
