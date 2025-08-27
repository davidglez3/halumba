document.addEventListener('DOMContentLoaded', () => {
  const categoryLinks = document.querySelectorAll('.category-link');
  const posts = document.querySelectorAll('.post-card');

  categoryLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const category = link.dataset.category;

      posts.forEach(post => {
        const postCategories = post.dataset.categories.split(',');
        if(category === 'all' || postCategories.includes(category)){
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
});
