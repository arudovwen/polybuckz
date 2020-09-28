<template>
  <div class="bg-white p-3">
    <b-modal id="newimage" title="Add image to gallery" size="lg" hide-footer>
      <b-form @submit.prevent="postImages" class="text-left">
        <b-form-group label="Column">
          <b-form-select v-model="info.line" class="w-100">
            <b-form-select-option value="1"> 1</b-form-select-option>
            <b-form-select-option value="2"> 2</b-form-select-option>
            <b-form-select-option value="3"> 3</b-form-select-option>
            <b-form-select-option value="4"> 4</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Title">
          <b-form-input
            v-model="info.title"
            placeholder="Enter Title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Description">
          <b-form-textarea
            v-model="info.description"
            placeholder="Enter description"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group>
          <b-form-file
            v-model="file"
            @change="handleFile($event, 'gallery')"
            class="mb-2"
          ></b-form-file>
          <b-progress v-if="start" :max="max">
            <b-progress-bar
              :value="progress"
              :label="`${progress}`"
              :animated="stop"
            ></b-progress-bar
          ></b-progress>
          <b-img
            width="100px"
            class="my-2"
            v-if="info.src"
            fluid
            alt="image"
            thumbnail
            :src="info.src"
          ></b-img>
        </b-form-group>
        <b-form-group>
          <b-button type="submit">Save</b-button>
        </b-form-group>
      </b-form>
    </b-modal>
    <b-modal id="newteam" title="Add team members" size="lg" hide-footer>
      <b-form @submit.prevent="postTeam" class="text-left">
        <b-form-group label="Title">
          <b-form-input
            v-model="teamInfo.title"
            placeholder="Enter Title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Description">
          <b-form-textarea
            v-model="teamInfo.description"
            placeholder="Enter description"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group>
          <b-form-file
            v-model="file"
            @change="handleFile($event, 'team')"
            class="mb-2"
          ></b-form-file>
          <b-progress v-if="start" :max="max">
            <b-progress-bar
              :value="progress"
              :label="`${progress}`"
              :animated="stop"
            ></b-progress-bar
          ></b-progress>
          <b-img
            width="100px"
            class="my-2"
            fluid
            alt="image"
            v-if="teamInfo.src"
            thumbnail
            :src="teamInfo.src"
          ></b-img>
        </b-form-group>
        <b-form-group>
          <b-button type="submit">Save</b-button>
        </b-form-group>
      </b-form>
    </b-modal>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Gallery" active>
          <b-container>
            <h4>Gallery Image</h4>
            <b-row>
              <b-col cols="12" class="text-left">
                <b-button size="sm" v-b-modal.newimage class="mb-4"
                  ><b-icon icon="plus-circle-fill"></b-icon> Add image</b-button
                >
                <b-table :items="items" responsive :fields="fields">
                  <template v-slot:cell(-)="data">
                    <div>
                      <b-icon
                        icon="trash"
                        @click="remove(data.item.id)"
                      ></b-icon>
                    </div>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="Team">
          <b-container>
            <h4>Team Members</h4>
            <b-row>
              <b-col cols="12" class="text-left">
                <b-button size="sm" v-b-modal.newteam class="mb-4"
                  ><b-icon icon="plus-circle-fill"></b-icon> Add
                  member</b-button
                >
                <b-table :items="teams" responsive :fields="fields1">
                  <template v-slot:cell(-)="data">
                    <div>
                      <b-icon
                        icon="trash"
                        @click="removeTeam(data.item.id)"
                      ></b-icon>
                    </div>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-container>
      <h4>Gallery Image</h4>
      <b-row>
        <b-col cols="12" class="text-left">
          <b-button size="sm" v-b-modal.newimage class="mb-4"
            ><b-icon icon="plus-circle-fill"></b-icon> Add image</b-button
          >
          <b-table :items="items" responsive :fields="fields">
            <template v-slot:cell(-)="data">
              <div>
                <b-icon icon="trash" @click="remove(data.item.id)"></b-icon>
              </div>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      info: {
        line: 1,
        title: "",
        src: "",
        description: "",
      },
      teamInfo: {
        title: "",
        src: "",
        description: "",
      },
      fields: ["title", "description", "source", "-"],
      fields1: ["title", "description", "profile", "-"],
      file: [],
      cloudinary: {
        uploadPreset: "polybuckz",
        apiKey: "299876354696117",
        cloudName: "dpe85nxdh",
      },
      start: false,
      progress: 0,
      max: 100,
      stop: true,
      teams: [],
    };
  },
  created() {
    this.getImages();
    this.getTeams();
  },
  methods: {
    getImages() {
      this.axios.get("https://polybuckz-api.herokuapp.com/gallery").then((res) => {
        if (res.status == 200) {
          this.items = res.data;
        }
      });
    },
    postImages() {
      this.axios
        .post("https://polybuckz-api.herokuapp.com/gallery", this.info)
        .then((res) => {
          if (res.status == 201) {
            this.items.push(res.data);
            this.$bvModal.hide("newimage");
            this.info = {
              line: 1,
              title: "",
              src: "",
              description: "",
            };
            this.start = false;
            this.progress = 0;
          }
        });
    },
    remove(id) {
      var col = confirm("Do you wish to delete?");
      if (col) {
        this.axios.delete(`https://polybuckz-api.herokuapp.com/gallery/${id}`).then((res) => {
          if (res.status == 200) {
            this.getImages();
          }
        });
      }
    },

    getTeams() {
      this.axios.get("https://polybuckz-api.herokuapp.com/team").then((res) => {
        if (res.status == 200) {
          this.teams = res.data;
        }
      });
    },
    postTeam() {
      this.axios
        .post("https://polybuckz-api.herokuapp.com/team", this.teamInfo)
        .then((res) => {
          if (res.status == 201) {
            this.teams.push(res.data);
            this.$bvModal.hide("newteam");
            this.teamInfo = {
              title: "",
              src: "",
              description: "",
            };
            this.start = false;
            this.progress = 0;
          }
        });
    },
    removeTeam(id) {
      var col = confirm("Do you wish to delete?");
      if (col) {
        this.axios.delete(`https://polybuckz-api.herokuapp.com/team/${id}`).then((res) => {
          if (res.status == 200) {
            this.getTeams();
          }
        });
      }
    },

    handleFile(e, type) {
      this.progress = 0;
      var file = e.target.files[0];
      this.uploadFile(file, type);
    },
    uploadFile(file, type) {
      let that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/" + cloudName + "/upload"
      );
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          that.progress = Math.round((e.loaded / e.total) * 100) + "%";
        }
      };
      xhr.upload.onloadstart = function () {
        this.progress = "Starting...";
      };
      xhr.upload.onloadend = function () {
        this.progress = "Completing..";
      };
      xhr.onload = () => {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          this.stop = false;

          var response = JSON.parse(xhr.response);
          if (type == "gallery") {
            this.info.src = response.secure_url; // https address of uploaded file
          } else {
            this.teamInfo.src = response.secure_url; // https address of uploaded file
          }
        } else {
          this.start = false;
          this.progress = 0;
          this.stop = true;
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    },
  },
};
</script>

<style scoped>
.container {
  height: 80vh;
  background: #f7faf8;
  padding: 30px;
  overflow: auto;
}
a{
    color: violet;
}
</style>