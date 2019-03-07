class Github {
  constructor() {
    this.client_id = '34bc4f99d667fe726b53';
    this.client_secret = 'c9909ab6dce0cd7e317f657ae9e00deb3a637a98';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}