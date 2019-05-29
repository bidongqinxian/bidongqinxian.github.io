const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,//�б�Ĭ���۵�
    listMaxHeight: 90,//�б����߶�
    lrcType: 3, //��Ϊ��ʸ�ʽ��û�и�ʿ���ֱ��ɾ����һ��
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'url1.mp3',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});