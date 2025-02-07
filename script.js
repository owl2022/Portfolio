function searchVideos() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let categories = ['compositions', 'covers', 'otherContents'];
    
    categories.forEach(function(category) {
        let container = document.getElementById(category);
        let videos = container.getElementsByTagName('iframe');
        
        Array.from(videos).forEach(function(video) {
            let title = video.src.split('/')[4];  // Assuming the video ID is part of the URL
            if (title && title.toLowerCase().includes(input)) {
                video.style.display = '';
            } else {
                video.style.display = 'none';
            }
        });
    });
}
